import React from "react";

const AdvanceSix = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto p-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">Sales by Countries</h2>
                    <button className="text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-green-600">US</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$8,656k</span>
                                    <div className="flex items-center text-green-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-green-800">25.8%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">United States of America</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">894k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-red-600">UK</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$2,415k</span>
                                    <div className="flex items-center text-red-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-red-800">6.2%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">United Kingdom</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">645k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-orange-600">IN</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$865k</span>
                                    <div className="flex items-center text-green-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-green-800">12.4%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">India</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">148k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-gray-600">JA</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$745k</span>
                                    <div className="flex items-center text-red-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-red-800">11.9%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">Japan</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">86k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-pink-600">KO</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$45k</span>
                                    <div className="flex items-center text-green-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-green-800">16.2%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">Korea</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">42k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                                <span className="text-base font-bold text-purple-600">CH</span>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-semibold text-gray-700">$12k</span>
                                    <div className="flex items-center text-green-500 text-sm font-medium">
                                        <svg className="w-5 h-5 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        <span className="text-xl text-green-800">14.8%</span>
                                    </div>
                                </div>
                                <div className="text-lg text-gray-500">China</div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xl font-bold text-gray-800">8k</div>
                            <div className="text-lg text-gray-400">Sales</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-800">Delivery Performance</h2>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                        </svg>
                    </button>
                </div>
                <div className="text-lg text-gray-500 mb-6">12% increase in this month</div>

                <div className="space-y-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Packages in transit</div>
                                <div className="flex items-center text-green-500 text-sm font-medium">
                                    <svg className="w-5 h-5 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-green-800">25.8%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">10k</div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Packages out for delivery</div>
                                <div className="flex items-center text-green-500 text-sm font-medium">
                                    <svg className="w-10 h-10 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-green-800">4.3%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">5k</div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Packages delivered</div>
                                <div className="flex items-center text-red-500 text-sm font-medium">
                                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-red-800">12.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">15k</div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v4H8V5z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Delivery success rate</div>
                                <div className="flex items-center text-green-500 text-sm font-medium">
                                    <svg className="w-10 h-10 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-green-800">35.6%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">95%</div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Average delivery time</div>
                                <div className="flex items-center text-red-500 text-sm font-medium">
                                    <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-red-800">2.15%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">2.5 Days</div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-700">Customer satisfaction</div>
                                <div className="flex items-center text-green-500 text-sm font-medium">
                                    <svg className="w-10 h-10 text-green-500 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="text-xl text-green-800">5.7%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-xl font-bold text-gray-800">4.5/5</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvanceSix;