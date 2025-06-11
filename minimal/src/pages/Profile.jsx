import React, { useState } from 'react';
import { User, Edit3, Save, X, Eye, EyeOff, Camera, Mail, Phone, MapPin, Calendar, ArrowLeft } from 'lucide-react';

const Profile = () => {
    const [currentView, setCurrentView] = useState('profile');
    const [showPassword, setShowPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [profileImage, setProfileImage] = useState(null);

    const [userProfile, setUserProfile] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        bio: '',
        joinDate: '',
        avatar: null
    });

    const [editData, setEditData] = useState({ ...userProfile });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfileImage(e.target.result);
                setEditData(prev => ({ ...prev, avatar: e.target.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!editData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!editData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(editData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (passwordData.currentPassword || passwordData.newPassword || passwordData.confirmPassword) {
            if (!passwordData.currentPassword) {
                newErrors.currentPassword = 'Current password is required';
            }
            if (!passwordData.newPassword) {
                newErrors.newPassword = 'New password is required';
            } else if (passwordData.newPassword.length < 6) {
                newErrors.newPassword = 'Password must be at least 6 characters';
            }
            if (passwordData.newPassword !== passwordData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setUserProfile({ ...editData });
        setCurrentView('profile');
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        console.log('Profile updated:', editData);
        if (passwordData.newPassword) {
            console.log('Password changed');
        }
    };

    const handleCancel = () => {
        setEditData({ ...userProfile });
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setProfileImage(userProfile.avatar);
        setErrors({});
        setCurrentView('profile');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (currentView === 'profile') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
                        </div>

                        <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[100vh]">
                            <div className="flex justify-between items-start mb-8">
                                <h1 className="text-3xl font-semibold text-gray-900">Profile</h1>
                                <button
                                    onClick={() => setCurrentView('edit')}
                                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    <Edit3 className="w-10 h-10 mr-2" />
                                    Edit Profile
                                </button>
                            </div>

                            <div className="flex flex-col items-center mb-8">
                                <div className="relative mb-4">
                                    {userProfile.avatar ? (
                                        <img
                                            src={userProfile.avatar}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                            <User className="w-16 h-16 text-gray-400" />
                                        </div>
                                    )}
                                </div>
                                <h2 className="text-4xl font-semibold text-gray-900 mb-2">{userProfile.fullName}</h2>
                                <p className="text-gray-600 text-center max-w-md text-xl">{userProfile.bio}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <Mail className="w-7 h-7 text-gray-400" />
                                        <div>
                                            <p className="text-lg text-gray-500">Email</p>
                                            <p className="text-gray-900 text-2xl">{userProfile.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <Phone className="w-7 h-7 text-gray-400" />
                                        <div>
                                            <p className="text-lg text-gray-500">Phone</p>
                                            <p className="text-gray-900 text-2xl">{userProfile.phone}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <MapPin className="w-7 h-7 text-gray-400" />
                                        <div>
                                            <p className="text-lg text-gray-500">Location</p>
                                            <p className="text-gray-900 text-2xl">{userProfile.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                        <Calendar className="w-7 h-7 text-gray-400" />
                                        <div>
                                            <p className="text-lg text-gray-500 ">Member Since</p>
                                            <p className="text-gray-900 text-2xl">{formatDate(userProfile.joinDate)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
                    </div>

                    <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto max-h-[80vh]">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={handleCancel}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <ArrowLeft className="w-10 h-10 text-gray-600" />
                                </button>
                                <h1 className="text-3xl font-semibold text-gray-900">Edit Profile</h1>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex flex-col items-center mb-8">
                                <div className="relative mb-4">
                                    {profileImage || editData.avatar ? (
                                        <img
                                            src={profileImage || editData.avatar}
                                            alt="Profile"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                        />
                                    ) : (
                                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                            <User className="w-16 h-16 text-gray-400" />
                                        </div>
                                    )}
                                    <label className="absolute bottom-0 right-0 bg-gray-900 text-white p-2 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
                                        <Camera className="w-4 h-4" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={editData.fullName}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.fullName ? 'border-red-300' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.fullName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={editData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.email ? 'border-red-300' : 'border-gray-300'
                                            }`}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={editData.phone}
                                        onChange={handleInputChange}
                                        className="text-2xl w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={editData.location}
                                        onChange={handleInputChange}
                                        className="text-2xl w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="bio" className="block text-lg font-medium text-gray-700 mb-2">
                                    Bio
                                </label>
                                <textarea
                                    id="bio"
                                    name="bio"
                                    rows={4}
                                    value={editData.bio}
                                    onChange={handleInputChange}
                                    className="text-2xl w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>

                            <div className="border-t pt-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Change Password</h3>
                                <div className="grid md:grid-cols-1 gap-6">
                                    <div>
                                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                            Current Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showCurrentPassword ? 'text' : 'password'}
                                                id="currentPassword"
                                                name="currentPassword"
                                                value={passwordData.currentPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Enter current password"
                                                className={`text-2xl w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.currentPassword ? 'border-red-300' : 'border-gray-300'
                                                    }`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                            </button>
                                        </div>
                                        {errors.currentPassword && (
                                            <p className="mt-1 text-lg text-red-600">{errors.currentPassword}</p>
                                        )}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                                New Password
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="newPassword"
                                                    name="newPassword"
                                                    value={passwordData.newPassword}
                                                    onChange={handlePasswordChange}
                                                    placeholder="Enter new password"
                                                    className={`text-2xl w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.newPassword ? 'border-red-300' : 'border-gray-300'
                                                        }`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                                </button>
                                            </div>
                                            {errors.newPassword && (
                                                <p className="mt-1 text-lg text-red-600">{errors.newPassword}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                value={passwordData.confirmPassword}
                                                onChange={handlePasswordChange}
                                                placeholder="Confirm new password"
                                                className={`text-2xl w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                                                    }`}
                                            />
                                            {errors.confirmPassword && (
                                                <p className="mt-1 text-lg text-red-600">{errors.confirmPassword}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4 pt-6">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
                                >
                                    <X className="w-4 h-4 mr-2" />
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSave}
                                    className="text-xl px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;