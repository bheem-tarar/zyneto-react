import React from "react";
import { MoreVertical, HelpCircle, TrendingUp } from "lucide-react";

const AdvanceFour = () => {
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Total Earning Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Total Earning</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl font-bold text-gray-700">$24,895</span>
              <div className="flex items-center gap-1 text-green-600">
                <svg
                  className="w-6 h-6 text-green-500 rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-xl font-medium">10%</span>
              </div>
            </div>
            <p className="text-[18px] text-gray-500">Compared to $84,325 last year</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] bg-lightest rounded-lg flex items-center justify-center flex-shrink-0 me-3">
                  <img src="../src/assets/zipcar.png" alt="zipcar" />
                </div>

                <div>
                  <h6 className="text-xl text-gray-500 font-bold">Zipcar</h6>
                  <p className="text-lg text-gray-500">Vuejs, React & HTML</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-700 text-xl pb-[4px]">$24,895.65</p>
                <div className="w-24 h-1 bg-gray-200 rounded-full mt-1">
                  <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] bg-lightest rounded-lg flex items-center justify-center flex-shrink-0 me-3">
                  <img src="../src/assets/bitbank.png" alt="bitbank" />
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-bold">Bitbank</p>
                  <p className="text-lg text-gray-500">Sketch, Figma & XD</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-700 text-xl pb-[4px]">$8,6500.20</p>
                <div className="w-24 h-1 bg-gray-200 rounded-full mt-1">
                  <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] bg-lightest rounded-lg flex items-center justify-center flex-shrink-0 me-3">
                  <img src="../src/assets/bitbank.png" alt="bitbank" />
                </div>
                <div>
                  <p className="text-xl text-gray-500 font-bold">Aviato</p>
                  <p className="text-lg text-gray-500">HTML & Angular</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">$1,2450.80</p>
                <div className="w-24 h-1 bg-gray-200 rounded-full mt-1">
                  <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-[15px]">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold text-gray-800">Finance Summary</h2>
            <span className="bg-label-primary rounded-full p-2 text-xl cursor-pointer">
            <i className="ri ri-question-line text-primary"></i>
            </span>
          </div>

          <p className="text-xl text-gray-500 mb-6">Check out each Column for more details</p>

          <div className="space-y-6">
            <div className="flex  items-start">
              <div>
                <p className="text-xl text-gray-600 mb-1">Annual Companies Taxes</p>
                <p className="text-xl font-bold text-gray-700">$1450.35</p>
              </div>
              <div className="items-start ml-[50px]">
                <p className="text-xl text-gray-600 mb-1">Next Tax Review Date</p>
                <p className="text-xl font-medium text-gray-700">July 14, 2021</p>
              </div>
            </div>

            <div className="flex  items-start">
              <div>
                <p className="text-xl text-gray-600 mb-1">Average Product Price</p>
                <p className="text-xl font-bold text-gray-700">$85.50</p>
              </div>
              <div className="item-start ml-[80px]">
                <p className="text-xl text-gray-600 mb-1">Satisfaction Rate</p>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1 bg-gray-200 rounded-full">
                    <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">75%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">


              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="../src/assets/8.png"
                      alt="8"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="../src/assets/5.png"
                      alt="5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src="../src/assets/1.png"
                      alt="1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-sm text-gray-600 font-semibold">+4</span>
                  </div>
                </div>
              </div>
              <div className="item-start ml-[110px]">
                <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1 rounded-full text-center w-[150px]">
                  5 Days Ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceFour;