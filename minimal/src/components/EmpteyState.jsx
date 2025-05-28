import React from 'react';
import { Package, BarChart3, User } from 'lucide-react';

const EmptyState = ({ title, description, type = 'default' }) => {
  const getIcon = () => {
    const iconMap = {
      dashboard: BarChart3,
      user: User,
      product: Package,
      default: Package
    };
    const IconComponent = iconMap[type] || Package;
    return <IconComponent className="w-12 h-12 text-gray-400" />;
  };

  const getDescription = () => {
    if (description) return description;
    
    const descriptionMap = {
      dashboard: 'Your dashboard metrics and analytics will appear here.',
      user: 'User management features will be displayed here.',
      product: 'Products will be shown here once they are added.',
      default: 'This section is currently empty.'
    };
    
    return descriptionMap[type] || descriptionMap.default;
  };

  return (
    <div className="ml-72 p-6 flex items-center justify-center min-h-96">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          {getIcon()}
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{getDescription()}</p>
        
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EmptyState;