import React from 'react';
import { CreditCard, Star, DollarSign, Database, Cloud } from 'lucide-react';

const AdvanceThird = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto ml-[px]">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">

        <div className="bg-white rounded-l-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Deposit</h2>
            <button className="text-purple-600 text-lg font-medium">
              View all
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3  rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-5 h-5 bg-teal-500 rounded"></div>
                  <img src="../src/assets/gumroad.png" alt="gumroad" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Gumroad Account</p>
                  <p className="text-xl text-gray-500">Sell UI Kit</p>
                </div>
              </div>
              <span className="text-[#56CA00] font-semibold text-xl">+$4,650</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg  transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/logo-mastercard-small.png" alt="logo-mastercard-small" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Mastercard</p>
                  <p className="text-xl text-gray-500">Wallet deposit</p>
                </div>
              </div>
              <span className="text-[#56CA00] font-semibold text-xl">+$92,705</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg  transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/stripes.png" alt="stripes" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Stripe Account</p>
                  <p className="text-xl text-gray-500">iOS Application</p>
                </div>
              </div>
              <span className="text-[#56CA00] font-semibold text-xl">+$957</span>
            </div>

            <div className="flex items-center justify-between p-3  rounded-lg  transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/american-bank.png" alt="american-bank" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">American Bank</p>
                  <p className="text-xl text-gray-500">Bank Transfer</p>
                </div>
              </div>
              <span className="text-[#56CA00] font-semibold text-xl">+$6,837</span>
            </div>

            <div className="flex items-center justify-between p-3  rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/american-bank.png" alt="bank-account" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Bank Account</p>
                  <p className="text-xl text-gray-500">Wallet deposit</p>
                </div>
              </div>
              <span className="text-[#56CA00] font-semibold text-xl">+$446</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-r-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Withdraw</h2>
            <button className="text-purple-600 text-lg font-medium">
              View all
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3  rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/google.png" alt="google" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Google Adsense</p>
                  <p className="text-xl text-gray-500">Paypal deposit</p>
                </div>
              </div>
              <span className="text-[#FF4C51] font-semibold text-xl">-$145</span>
            </div>

            <div className="flex items-center justify-between p-3  rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/github.png" alt="github" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Github Enterprise</p>
                  <p className="text-xl text-gray-500">Security & compliance</p>
                </div>
              </div>
              <span className="text-[#FF4C51] font-semibold text-xl">-$1870</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/slack.png" alt="slack" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Upgrade Slack Plan</p>
                  <p className="text-xl text-gray-500">Debit card deposit</p>
                </div>
              </div>
              <span className="text-[#FF4C51] font-semibold text-xl">-$450</span>
            </div>

            <div className="flex items-center justify-between p-3  rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/citi.png" alt="digital-ocean" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">Digital Ocean</p>
                  <p className="text-xl text-gray-500">Cloud Hosting</p>
                </div>
              </div>
              <span className="text-[#FF4C51] font-semibold text-xl">-$540</span>
            </div>

            <div className="flex items-center justify-between p-3  rounded-lg  transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-teal-500 rounded"></div>
                  <img src="../src/assets/aws.png" alt="aws" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
                </div>
                <div className='ml-[5px]'>
                  <p className="font-medium text-[#6D67777] text-xl">AWS Account</p>
                  <p className="text-xl text-gray-500">Choosing a Cloud Platform</p>
                </div>
              </div>
              <span className="text-[#FF4C51] font-semibold text-xl">-$21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceThird;