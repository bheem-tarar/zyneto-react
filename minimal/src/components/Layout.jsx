import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeader = location.pathname === '/' || location.pathname.startsWith('/');

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {showHeader && <Header />}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;