import React from 'react';

const AdvanceFirst = () => {
  return (
    <div className="flex gap-5 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 flex-1">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">Transactions</h2>
          <div className="w-1 h-1 bg-gray-400 rounded-full relative cursor-pointer">
            <div className="absolute -top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-pink-500 rounded-sm flex items-center justify-center">
                  <img src="/src/assets/paypal.svg" alt="credit-card" className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-600">Paypal</h4>
                <div className="text-base text-gray-500">Received Money</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700 text-xl">+$24,820</span>
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
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-green-500 rounded-sm"></div>
              </div>
              <div>
                <div className="font-medium text-gray-600 text-lg">Credit Card</div>
                <div className="text-base text-gray-500">Digital Ocean</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xl text-gray-700">-$1,250</span>
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-yellow-500 rounded-sm"></div>
              </div>
              <div>
                <div className="font-medium text-gray-600 text-lg">Mastercard</div>
                <div className="text-base text-gray-500">Netflix</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xl text-gray-700">-$99</span>
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-purple-500 rounded-sm"></div>
              </div>
              <div>
                <div className="font-medium text-gray-600 text-lg">Wallet</div>
                <div className="text-base text-gray-500">Mac'D</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xl text-gray-700">-$82</span>
              <svg
                className="w-6 h-6 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-green-500 rounded-sm"></div>
              </div>
              <div>
                <div className="font-medium text-gray-600 text-lg">ATM Card</div>
                <div className="text-base text-gray-500">Digital Ocean</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xl text-gray-700">-$550</span>
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
            </div>
          </div>

          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 15.586 6H12z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-600 text-lg">Transfer</div>
                <div className="text-base text-gray-500">Refund</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-xl text-gray-700">+$8,934</span>
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
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 flex-1 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-600">Upgrade Your Plan</h2>
          <div className="w-1 h-1 bg-gray-400 rounded-full relative cursor-pointer">
            <div className="absolute -top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="absolute top-2 w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-base">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>

        <div className="bg-gradient-to-r from-purple-200 p-4 rounded-xl mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img src="/src/assets/briefcase.png" alt="briefcase" className="w-10 h-10" />
              </div>
              <div>
                <div className="font-semibold text-gray-600 text-lg">Platinum</div>
                <div className="text-base text-purple-600">Upgrade Plan</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900"><span className="text-lg align-top text-gray-500">$</span>5,250<span className="text-lg text-gray-500">/Year</span></div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Payment Details</h3>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                  <img src="/src/assets/logo-mastercard-small.png" alt="logo-mastercard-small" className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-600 text-base">Credit Card</div>
                  <div className="text-sm text-gray-500">5688 xxxx xxxx 2356</div>
                </div>
              </div>
              <input type="text" placeholder="CVV" className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full opacity-80"></div>
                  <img src="/src/assets/credit-card.svg" alt="credit-card" className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-gray-600 text-base">Credit Card</div>
                  <div className="text-sm text-gray-500">8562 xxxx xxxx 4563</div>
                </div>
              </div>
              <input type="text" placeholder="CVV" className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center" />
            </div>
          </div>

          <button className="text-purple-600 text-base mt-3 hover:underline">Add Payment Method</button>
        </div>

        <div className="mb-6">
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base" />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors text-base">
            Contact Now
          </button>
        </div>

        <div className="absolute top-6 right-6">
        </div>
      </div>
    </div>
  );
};

export default AdvanceFirst;