import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, BarChart3, User, Package, Settings, Blocks, LogIn, UserPlus, } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, path: '/dashboard' },
    { id: 'user', label: 'User', icon: User, path: '/users' },
    { id: 'product', label: 'Product', icon: Package, path: '/products', badge: '+3' },
    { id: 'advance', label: 'Advance', icon: Settings, path: '/advance' },
    { id: 'blog', label: 'Blog', icon: Blocks, path: '/Blog' },
    { id: 'sign in', label: 'Sign in', icon: LogIn, path: '/signin' },
    { id: 'signup', label: 'Sign up', icon: UserPlus, path: '/signup' }, 
    { id: 'profile', lable: 'Profile', icon: UserPlus, path: '/profile' }
  ];

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md bg-gray-900 text-white"
        >
          <Menu />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-full w-60 bg-gray-100 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static md:block`}
      >
        <div className="p-4 ">
          <div className="mb-6 stiky">
            <svg width="80" height="80" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="blue-1" x1="152" y1="167.79" x2="65.523" y2="259.624" gradientUnits="userSpaceOnUse">
                  <stop offset="1" stopColor="#2563EB" /> {/* blue-600 */}
                </linearGradient>
                <linearGradient id="blue-2" x1="86" y1="128" x2="86" y2="384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" /> {/* blue-400 */}
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
                <linearGradient id="blue-3" x1="402" y1="288" x2="402" y2="384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="1" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <path fill="url(#blue-1)" d="M86.352 246.358C137.511 214.183 161.836 245.017 183.168 285.573C165.515 317.716 153.837 337.331 148.132 344.418C137.373 357.788 125.636 367.911 111.202 373.752C80.856 388.014 43.132 388.681 14 371.048L86.352 246.358Z"></path>
              <path fill="url(#blue-2)" fillRule="evenodd" clipRule="evenodd" d="M444.31 229.726C398.04 148.77 350.21 72.498 295.267 184.382C287.751 198.766 282.272 226.719 270 226.719V226.577C257.728 226.577 252.251 198.624 244.735 184.24C189.79 72.356 141.96 148.628 95.689 229.584C92.207 235.69 88.862 241.516 86 246.58C192.038 179.453 183.11 382.247 270 383.858V384C356.891 382.389 347.962 179.595 454 246.72C451.139 241.658 447.794 235.832 444.31 229.726Z"></path>
              <path fill="url(#blue-3)" fillRule="evenodd" clipRule="evenodd" d="M450 384C476.509 384 498 362.509 498 336C498 309.491 476.509 288 450 288C423.491 288 402 309.491 402 336C402 362.509 423.491 384 450 384Z"></path>
            </svg>
          </div>

          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm mb-6">
            <div className="flex items-center space-x-3">
              <img src="/src/assets/logo-1.webp" alt="logo-1" className="w-8 h-8" />
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

          <div className="overflow-y-auto max-h-[calc(100vh-350px)] pr-2">
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
                    onClick={() => {
                      navigate(item.path);
                      setIsOpen(false);
                    }}
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
          </div>


          <div className="mt-8">
            <h3 className="text-purple-600 font-medium mb-4 ml-[50px]">More features?</h3>
            <p className="text-gray-600 text-sm mb-4 ml-[50px]">
              From only <span className="font-semibold">$69</span>
            </p>

            <div className="bg-gray-50 rounded-lg p-4 mb-4 flex justify-center">
              <img
                src="/src/assets/first.webp"
                alt="first"
                className="w-full h-auto max-w-xs object-contain"
              />
            </div>

            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
