import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BarChart3, User, Package } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: BarChart3,
      path: '/dashboard'
    },
    {
      id: 'user',
      label: 'User',
      icon: User,
      path: '/users'
    },
    {
      id: 'product',
      label: 'Product',
      icon: Package,
      path: '/products',
      badge: '+3'
    }
  ];

  return (
    <div className="w-[350px] bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-10">
      <div className="p-4">
        {/* Logo at the top */}
        <div className="mb-6">
          <svg width="20%" height="20%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="«r0»-1" x1="152" y1="167.79" x2="65.523" y2="259.624" gradientUnits="userSpaceOnUse"><stop stop-color="var(--palette-primary-dark)"></stop><stop offset="1" stop-color="var(--palette-primary-main)"></stop></linearGradient><linearGradient id="«r0»-2" x1="86" y1="128" x2="86" y2="384" gradientUnits="userSpaceOnUse"><stop stop-color="var(--palette-primary-light)"></stop><stop offset="1" stop-color="var(--palette-primary-main)"></stop></linearGradient><linearGradient id="«r0»-3" x1="402" y1="288" x2="402" y2="384" gradientUnits="userSpaceOnUse"><stop stop-color="var(--palette-primary-light)"></stop><stop offset="1" stop-color="var(--palette-primary-main)"></stop></linearGradient></defs><path fill="url(#«r0»-1)" d="M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"></path><path fill="url(#«r0»-2)" fill-rule="evenodd" clip-rule="evenodd" d="M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"></path><path fill="url(#«r0»-3)" fill-rule="evenodd" clip-rule="evenodd" d="M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"></path></svg>  </div>

        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm">
          <div className="flex items-center space-x-3">
            <img src="/src/assets/logo-1.webp" alt="logo-1" />
            <span className="text-sm font-medium text-gray-800">Team 1</span>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded">Free</span>
          </div>

          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            return (
              <div
                key={item.id}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${active
                    ? item.id === 'product'
                      ? 'bg-blue-50 text-blue-600'
                      : 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
                onClick={() => navigate(item.path)}
              >
                <IconComponent className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* More features section */}
        <div className="mt-8">
          <h3 className="text-purple-600 font-medium mb-4">More features?</h3>
          <p className="text-gray-600 text-sm mb-4">From only <span className="font-semibold">$69</span></p>

          {/* Feature preview */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-blue-100 rounded h-8"></div>
              <div className="bg-yellow-100 rounded h-8"></div>
            </div>
            <div className="bg-blue-500 rounded h-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
              <div className="absolute bottom-2 left-2 right-2">
                <div className="bg-white/20 rounded h-2 mb-1"></div>
                <div className="bg-white/30 rounded h-1"></div>
              </div>
            </div>
            <div className="flex mt-2 space-x-1">
              <div className="w-6 h-6 bg-orange-200 rounded"></div>
              <div className="w-6 h-6 bg-green-200 rounded"></div>
              <div className="w-6 h-6 bg-red-200 rounded"></div>
            </div>
          </div>

          <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;