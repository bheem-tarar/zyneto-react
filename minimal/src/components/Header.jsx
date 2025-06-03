import React from 'react';
import { Search, User, Filter, ChevronDown } from 'lucide-react';

const Header = () => {
    return (
        <div className="h-[100px] px-6 py-4 ml-[300px] bg-gray-100"
            style={{ '--Paper-shadow': 'var(--shadows-4)' }}>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900"></h1>

                <div className="flex items-center space-x-4">
                    <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />

                    {/* <div className="w-6 h-4 bg-gradient-to-b from-blue-600 via-white to-red-600 rounded-sm relative cursor-pointer">
                        <div className="absolute inset-0 bg-blue-600"></div>
                        <div className="absolute top-0 left-0 w-full h-1/3 bg-blue-600"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-red-600"></div>
                        <div className="absolute top-1/3 left-0 w-full h-1/3 bg-white"></div>
                    </div> */}

                    {/* <div className="relative cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
              <span className="text-white text-xs font-bold">2</span>
            </div>
          </div> */}

                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400 transition-colors">
                        <User className="w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;





