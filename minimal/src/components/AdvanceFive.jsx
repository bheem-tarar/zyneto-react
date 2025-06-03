import React from "react";

const AdvanceFive = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto ">
            {/* Website Statistics Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full lg:w-1/2 ml-[10px] mb-5">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-700">Website Statistics</h2>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="mb-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-[46px] font-bold text-gray-900 mb-1">4,590</h1>
                        <div className="text-lg text-gray-500">Total Traffic</div>
                    </div>

                    <div className="flex justify-end items-end gap-2 h-10">
                        <div className="bg-purple-500 rounded-sm w-2 h-4"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-6"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-8"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-6"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-8"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-5"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-3"></div>
                        <div className="bg-purple-500 rounded-sm w-2 h-2"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Direct</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">86,471</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">15%</span>
                                <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Organic Search</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">57,484</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">85%</span>
                                <svg className="w-6 h-6 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Referral</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">2,534</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">48%</span>
                                <svg className="w-6 h-6 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Mail</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">977</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">36%</span>
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-blue-400 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Social</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">92</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">55%</span>
                                <svg className="w-6 h-6 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                            <span className="text-[20px] text-gray-700">Other</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <h6 className="text-xl font-medium text-gray-500">28</h6>
                            <div className="flex items-center gap-2">
                                <span className="text-lg text-gray-500">12%</span>
                                <svg className="w-6 h-6 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100  w-full lg:w-1/2 ml-[10px] ">
                <div className="h-40 w-full relative overflow-hidden">
                    <img
                        src="../src/assets/laptop.png"
                        alt="laptop workspace"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-20"></div>

                    {/* Date Badge positioned correctly */}
                    {/* <div className="absolute top-4 right-4">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2 text-center">
                            <div className="text-xs font-medium text-purple-600 uppercase">Jan</div>
                            <div className="text-lg font-bold text-gray-900">24</div>
                        </div>
                    </div> */}
                </div>

                <div className="p-6">
                    <div className="flex items-start gap-4 border-b border-gray-200 pb-4">
                        <div className="flex flex-col justify-center items-center bg-purple-50 rounded-lg w-[80px] h-[80px]">
                            <div className="text-[18px] font-semibold text-purple-600 uppercase">Jan</div>
                            <div className="text-[24px] font-extrabold text-purple-600">24</div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-1">Developer Meetup</h3>
                            <p className="text-[15px] text-gray-600">
                                The WordPress open source, free software project is the community behind the...</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 border-b border-gray-200 pb-4">
                        <div className="flex flex-col items-center gap-1 text-purple-600 hover:text-purple-700">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                            <span className="text-xl">Interested</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                            <span className="text-xs">Joined</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-purple-600 hover:text-purple-700 transition-colors">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                            </svg>
                            <span className="text-xl">Invited</span>
                        </div>

                        <div className="flex flex-col items-center gap-1 text-gray-500 transition-colors">
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                            </svg>
                            <span className="text-xl">More</span>
                        </div>
                    </div>

                    <div className="space-y-3 mt-6">

                        <div className="flex items-start gap-3">
                            <svg className="w-10 h-10 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <div className="text-lg font-semibold text-gray-600">Tuesday, 24 January, 10:20 - 12:30</div>
                                <div className="text-xl text-gray-500">After 1 week</div>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <svg className="w-10 h-10 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <div>
                                <div className="text-lg font-semibold text-gray-600">The Rochard NYC</div>
                                <div className="text-xl text-gray-500">1305 Lexington Ave, New York</div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
};

export default AdvanceFive;