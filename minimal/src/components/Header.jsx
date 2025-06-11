import React, { useState, useEffect, useRef } from 'react';
import { Search, User, Home, Shield, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (path) => {
        navigate(path); 
        setDropdownOpen(false);
    };

    return (
        <div className="h-[100px] px-6 py-4 ml-[300px] bg-gray-100">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900"></h1>

                <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                    <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />

                    <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors"
                    >
                        <User className="w-5 h-5 text-gray-600" />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute right-0 top-12 z-20 w-55 bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="px-4 py-3 text-sm">
                                <div className="font-semibold text-gray-900">Jaydon Frankie</div>
                                <div className="text-gray-500 text-sm">demo@minimals.cc</div>
                            </div>
                            <hr className="border-t border-dotted border-gray-200" />

                            <ul className="py-2 text-sm text-gray-700">
                                <li>
                                    <button
                                        onClick={() => handleNavigation('/home')}
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-left"
                                    >
                                        <Home className="w-4 h-4 text-gray-500" /> Home
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation('/profile')}
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-left"
                                    >
                                        <Shield className="w-4 h-4 text-gray-500" /> Profile
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => handleNavigation('/settings')}
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 w-full text-left"
                                    >
                                        <Settings className="w-4 h-4 text-gray-500" /> Settings
                                    </button>
                                </li>
                            </ul>

                            <hr className="border-t border-dotted border-gray-200" />

                            <div className="py-2 justify-center text-center">
                                <button
                                    className="block px-4 py-2 text-sm font-semibold text-red-600 hover:bg-gray-100 w-full"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
