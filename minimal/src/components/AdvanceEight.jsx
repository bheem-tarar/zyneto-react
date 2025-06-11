import React from 'react';
import { BarChart2, FileText, MoreHorizontal, Star } from 'lucide-react';
import laptopImg from '../assets/laptop.png';
import Cafebg from '../assets/Cafebg.png';

const AdvanceEight = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto p-4">
            <div className="lg:w-6/12 xl:w-1/2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                    <img
                        src={laptopImg}
                        alt="laptop workspace"
                        className="w-full h-48 object-cover rounded-t-xl"
                    />

                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                            <BarChart2 className="w-6 h-6 text-gray-700" />
                            <h5 className="text-xl font-semibold text-gray-900">Activity Timeline</h5>
                        </div>

                        <div className="flex gap-4 pb-8">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-3 justify-between">
                                    <h6 className="text-xl font-semibold text-gray-700 mb-1">12 Invoices have been paid</h6>
                                    <small className="text-gray-500 text-lg">12 min ago</small>
                                </div>
                                <p className="text-gray-600 mb-3 text-xl">Invoices have been paid to the company</p>
                                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-[150px]">
                                    <FileText className="w-5 h-5 text-red-500" />
                                    <span className="text-sm font-medium text-gray-900">invoices.pdf</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pb-8">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                                <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-3 justify-between">
                                    <h6 className="text-xl font-semibold text-gray-700 mb-1">Client Meeting</h6>
                                    <small className="text-gray-500 text-lg">45 min ago</small>
                                </div>
                                <p className="text-gray-600 mb-3 text-xl">Project meeting with john @10:15am</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        L
                                    </div>
                                    <div>
                                        <p className="text-xl font-medium text-gray-900">Lester McCarthy (Client)</p>
                                        <small className="text-gray-500 text-lg">CEO of ThemeSelection</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                            </div>
                            <div className="flex-1">
                                <div className="flex mb-3 justify-between">
                                    <h6 className="font-semibold text-gray-700 mb-1 text-xl">Create a new project for client</h6>
                                    <small className="text-gray-500 text-xl">2 Day Ago</small>
                                </div>
                                <p className="text-gray-600 mb-3 text-lg">6 team members in a project</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                            <img
                                                src='../src/assets/v-image.png'
                                                alt="V Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                            <img
                                                src='../src/assets/v-image.png'
                                                alt="A Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                                            <img
                                                src='../src/assets/v-image.png'
                                                alt="J Avatar"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 text-xs font-semibold border-2 border-white">
                                            +3
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-6/12 xl:w-1/2 space-x-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-[600px]">
                    <div className="relative h-48 bg-gradient-to-r from-orange-200 to-yellow-100">
                        <img
                            src={Cafebg}
                            alt="CafebgImg"
                            className="w-full h-full object-cover"
                        />

                    </div>

                    <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                            <h2 className="text-xl font-semibold text-gray-700">Cafe Badilico</h2>
                            <button className="text-gray-400 hover:text-gray-600">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex items-center gap-1 mb-2">
                            <div className="flex items-center">
                                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                <Star className="w-6 h-6 fill-gray-300 text-gray-300" />
                            </div>
                            <span className="text-xl text-gray-600 ml-2">4 Star (12.4k)</span>
                        </div>

                        <p className="text-gray-600 text-xl mb-3">Italian Cafe</p>

                        <p className="text-gray-700 text-xl leading-relaxed mb-4">
                            The refrigerated dairy aisle of your local grocery store can be a great source tasty, convenient selections for your.
                        </p>

                        <div className="mb-4">
                            <h3 className="text-gray-500 font-medium mb-3 text-2xl">Tonight's availability</h3>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full text-xl transition-colors">
                                    5:30PM
                                </button>
                                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full text-xl transition-colors">
                                    7:00PM
                                </button>
                                <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-full text-xl transition-colors">
                                    7:15PM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvanceEight;