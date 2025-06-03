import React from 'react';
import { Play, Code, Camera, Palette, Mic, Calendar, Clock } from 'lucide-react';

const AdvanceSeven = () => {
    const courses = [
        {
            icon: <Play className="w-10 h-10 text-purple-600" />,
            title: "Videography Basic Design Course",
            views: "1.2k Views",
            bgColor: "bg-purple-100"
        },
        {
            icon: <Code className="w-5 h-5 text-blue-600" />,
            title: "Basic Front-end Development Course",
            views: "834 Views",
            bgColor: "bg-blue-100"
        },
        {
            icon: <Camera className="w-5 h-5 text-green-600" />,
            title: "Basic Fundamentals of Photography",
            views: "3.7k Views",
            bgColor: "bg-green-100"
        },
        {
            icon: <Palette className="w-5 h-5 text-yellow-600" />,
            title: "Advance Dribble Base Visual Design",
            views: "2.5k Views",
            bgColor: "bg-yellow-100"
        },
        {
            icon: <Mic className="w-5 h-5 text-red-600" />,
            title: "Your First Singing Lesson",
            views: "948 Views",
            bgColor: "bg-red-100"
        }
    ];

    return (
        // <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="bg-white rounded-2xl shadow-sm p-6 mb-[20px]">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold text-gray-800">Top Courses</h2>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-4">
                        {courses.map((course, index) => (
                            <div key={index} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className={`${course.bgColor} p-3 rounded-xl`}>
                                    {course.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl text-gray-800 mb-1">{course.title}</h3>
                                </div>
                                <div className="badge bg-gray-200 rounded-full text-gray-700 text-sm h-[25px] w-[100px] text-center">
                                    {course.views}
                                </div>
                            </div>

                        ))}
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 gap-3">
                <div className="mb-6">
                    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 mb-6 relative overflow-hidden">
                        <div className="flex justify-center items-center h-32">
                            <div className="relative">
                                <div className="w-16 h-16 bg-blue-400 rounded-full mb-2 mx-auto relative">
                                    <div className="absolute inset-x-0 top-2 h-8 bg-blue-500 rounded-b-full"></div>
                                </div>
                                <div className="w-20 h-12 bg-purple-400 rounded-t-2xl mx-auto relative">
                                    <div className="absolute right-2 top-2 w-6 h-6 bg-gray-200 rounded-full"></div>
                                </div>
                                <div className="absolute -right-6 top-4 w-4 h-4 bg-yellow-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                   <div className='space-x-2'>
                    <h2 className="text-xl font-semibold text-gray-600 mb-2">Upcoming Webinar</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Next Generation Frontend Architecture Using Layout Engine And React Native Web.
                    </p>
                    </div>

                    <div className="flex  mb-6 justify-items-start space-x-3">
                        <div className="flex  space-x-3">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                <Calendar className="w-10 h-10 text-purple-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-800">17 Nov 23</div>
                                <div className="text-sm text-gray-500">Date</div>
                            </div>
                        </div>

                        <div className="flex items-left space-x-3 ml-[50px]">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                <Clock className="w-10 h-10 text-purple-600" />
                            </div>
                            <div>
                                <div className="font-medium text-gray-800">32 minutes</div>
                                <div className="text-sm text-gray-500">Duration</div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-3 px-6 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl mt-[30px]">
                        Join The Event
                    </button>
                </div>
            </div>
        </div>
        // </div >
    );
};
export default AdvanceSeven;