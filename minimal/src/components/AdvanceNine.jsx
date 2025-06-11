import React from 'react';
const AdvanceNine = () => {
    return (
        <div class="flex gap-6 max-w-7xl mx-auto">
            <div class="bg-white rounded-lg shadow-sm p-6 flex-1 w-1/2">
                <div class="flex justify-between items-center mb-4">
                    <div>
                        <h2 class="text-xl font-semibold text-gray-900">Orders by Countries</h2>
                        <p class="text-xl text-gray-500">62 deliveries in progress</p>
                    </div>
                    <button class="text-gray-400 hover:text-gray-600">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>
                </div>
                <div class="flex mb-6">
                    <button class="px-4 py-2 text-lg font-medium text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 border-b-2 border-transparent">prepairing</button>

                    <button class="px-4 py-2 text-lg font-medium text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 border-b-2 border-transparent">New</button>

                    <button class="px-4 py-2 text-lg font-medium text-gray-600 hover:text-purple-600 hover:border-b-2 hover:border-purple-600 border-b-2 border-transparent">Shipping</button>
                </div>
                <div class="space-y-4">
                    <div class="border-b border-dashed  pb-4">
                        <div class="flex items-start  space-x-3">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-1">
                                    <span class="text-xl font-medium text-green-600 uppercase">SENDER</span>
                                </div>
                                <p class="font-medium text-gray-900 text-xl">Barry Schowalter</p>
                                <p class="text-lg text-gray-500">939 Orange, California(CA), 92118</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3 mt-4">
                            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-1">
                                    <span class="text-xl font-medium text-purple-600 uppercase">RECEIVER</span>
                                </div>
                                <p class="text-xl text-gray-900">Myrtle Ullrich</p>
                                <p class="text-lg text-gray-500">101 Boulder, California(CA), 95959</p>
                            </div>
                        </div>
                    </div>

                    <div class="border-b-2 border-dotted border-gray-300 pb-4">
                        <div class="flex items-start space-x-3">
                            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-1">
                                    <span class="text-xlfont-medium text-green-600 uppercase">SENDER</span>
                                </div>
                                <p class="text-xl text-gray-900">Veronica Herman</p>
                                <p class="text-lg text-gray-500">162 Windsor, California(CA), 95492</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-3 mt-4">
                            <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5z" />
                                </svg>
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center space-x-2 mb-1">
                                    <span class="text-xl font-medium text-purple-600 uppercase">RECEIVER</span>
                                </div>
                                <p class="text-xl text-gray-900">Helen Jacobs</p>
                                <p class="text-lg text-gray-500">487 Sunset, California(CA), 94043</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div class="bg-white rounded-lg  p-6 w-80 xl:w-1/2">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-semibold text-gray-800">Meeting Schedule</h2>
                    <button class="text-gray-400 hover:text-gray-600">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                    </button>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/5.png" alt="5" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-700">Call with Woods</p>
                            <p class="text-lg text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-purple-100 text-purple-700 rounded-full">Business</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/1.png" alt="1" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-900">Conference call</p>
                            <p class="text-lg text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-yellow-100 text-yellow-700 rounded-full">Dinner</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/8.png" alt="8" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-900">Meeting with Mark</p>
                            <p class="text-lgf text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-gray-100 text-gray-700 rounded-full">Meetup</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/2.png" alt="2" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-900">Meeting in Oakland</p>
                            <p class="text-xl text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-red-100 text-red-700 rounded-full">Dinner</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/2.png" alt="2" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-900">Call with hilda</p>
                            <p class="text-xl text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-green-100 text-green-700 rounded-full">Meditation</span>
                    </div>

                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-500 rounded-full overflow-hidden">
                            <img src="../src/assets/5.png" alt="5" class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-1">
                            <p class="text-xl font-medium text-gray-900">Meeting with Carl</p>
                            <p class="text-xl text-gray-500">📅 21 Jul | 08:20-10:30</p>
                        </div>
                        <span class="px-2 py-1 text-lg font-medium bg-purple-100 text-purple-700 rounded-full">Business</span>
                    </div>
                </div>


            </div>
        </div>

    )
};

export default AdvanceNine;
