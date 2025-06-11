import React from 'react';
import { ChevronDown, TrendingUp, CreditCard, Wallet, ArrowUpRight } from 'lucide-react';

const AdvanceFirst = () => {
  const transactions = [
    {
      id: 1,
      type: 'Paypal',
      description: 'Received Money',
      amount: '+$24,820',
      isPositive: true,
      bgColor: 'bg-pink-100',
      iconColor: 'bg-pink-500',
      icon: '💳'
    },
    {
      id: 2,
      type: 'Credit Card',
      description: 'Digital Ocean',
      amount: '-$1,250',
      isPositive: false,
      bgColor: 'bg-green-100',
      iconColor: 'bg-green-500',
      icon: '💳'
    },
    {
      id: 3,
      type: 'Mastercard',
      description: 'Netflix',
      amount: '-$99',
      isPositive: false,
      bgColor: 'bg-yellow-100',
      iconColor: 'bg-yellow-500',
      icon: '💳'
    },
    {
      id: 4,
      type: 'Wallet',
      description: "Mac'D",
      amount: '-$82',
      isPositive: false,
      bgColor: 'bg-purple-100',
      iconColor: 'bg-purple-500',
      icon: '👛'
    },
    {
      id: 5,
      type: 'ATM Card',
      description: 'Digital Ocean',
      amount: '-$550',
      isPositive: false,
      bgColor: 'bg-green-100',
      iconColor: 'bg-green-500',
      icon: '🏧'
    },
    {
      id: 6,
      type: 'Transfer',
      description: 'Refund',
      amount: '+$8,934',
      isPositive: true,
      bgColor: 'bg-blue-100',
      iconColor: 'bg-blue-500',
      icon: '↗️'
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'Credit Card',
      number: '5688 xxxx xxxx 2356',
      bgColor: 'bg-gradient-to-r from-red-500 to-yellow-500',
      icon: '💳'
    },
    {
      id: 2,
      type: 'Credit Card',
      number: '8562 xxxx xxxx 4563',
      bgColor: 'bg-blue-500',
      icon: '💳'
    }
  ];

  return (
    <div className="flex flex-wrap gap-6 max-w-7xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-[300px] lg:w-1/2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Transactions</h2>
          <div className="flex flex-col gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
        
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between py-3 hover:bg-gray-50 rounded-lg px-2 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${transaction.bgColor} rounded-lg flex items-center justify-center`}>
                  <div className={`w-8 h-8 ${transaction.iconColor} rounded-sm flex items-center justify-center text-white text-lg`}>
                    {transaction.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-700">{transaction.type}</h4>
                  <div className="text-sm text-gray-500">{transaction.description}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-semibold text-xl ${transaction.isPositive ? 'text-green-600' : 'text-gray-700'}`}>
                  {transaction.amount}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 ${transaction.isPositive ? 'text-green-500 rotate-180' : 'text-red-400'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 flex-1 min-w-[300px] lg:w-1/2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Upgrade Your Plan</h2>
          <div className="flex flex-col gap-1 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          Please make the payment to start enjoying all the features of our premium plan as soon as possible.
        </p>

        {/* Plan Card */}
        <div className="bg-gradient-to-r from-purple-100 to-purple-200 p-5 rounded-xl mb-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white text-2xl">
                💼
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-lg">Platinum</div>
                <div className="text-sm text-purple-600 font-medium">Upgrade Plan</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">
                <span className="text-lg align-top text-gray-500">$</span>
                5,250
                <span className="text-lg text-gray-500 font-normal">/Year</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Payment Details</h3>
          
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center text-white`}>
                    {method.icon}
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 text-base">{method.type}</div>
                    <div className="text-sm text-gray-500">{method.number}</div>
                  </div>
                </div>
                <input 
                  type="text" 
                  placeholder="CVV" 
                  className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                  maxLength={4}
                />
              </div>
            ))}
          </div>

          <button className="text-purple-600 text-base mt-4 hover:text-purple-700 hover:underline transition-colors font-medium">
            + Add Payment Method
          </button>
        </div>

        <div className="mb-6">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base transition-all" 
          />
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-base">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default AdvanceFirst;