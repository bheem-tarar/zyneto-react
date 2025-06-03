import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const getColorClass = (color) => {
    const colorMap = {
      green: 'bg-green-500',
      black: 'bg-gray-900',
      white: 'bg-white border-2 border-gray-300',
      pink: 'bg-pink-300',
      blue: 'bg-blue-500',
      red: 'bg-red-500',
      orange: 'bg-orange-500',
      gray: 'bg-gray-500',
    };
    return colorMap[color] || 'bg-gray-400';
  };

  const getTagClass = (tag) => {
    const tagMap = {
      SALE: 'bg-red-500 text-white',
      NEW: 'bg-green-500 text-white',
      FEATURED: 'bg-blue-500 text-white',
    };
    return tagMap[tag] || 'bg-blue-500 text-white';
  };

  const handleProductClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    console.log('Added to wishlist:', product.id);
    // Implement wishlist functionality
  };

  // Safely handle colors - ensure it's always an array
  const getProductColors = () => {
    if (!product.colors) return [];
    
    // If colors is already an array (JSONField approach)
    if (Array.isArray(product.colors)) {
      return product.colors;
    }
    
    // If colors is a string (TextField approach)
    if (typeof product.colors === 'string') {
      return product.colors.split(',').map(color => color.trim()).filter(color => color);
    }
    
    return [];
  };

  const colors = getProductColors();

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group"
      onClick={handleProductClick}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-300"
        />
        {product.tag && (
          <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${getTagClass(product.tag)}`}>
            {product.tag}
          </span>
        )}
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
        >
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 truncate">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex space-x-1">
            {colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${getColorClass(color)}`}
                title={color}
              />
            ))}
            {colors.length > 3 && (
              <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-600">+{colors.length - 3}</span>
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">{product.company}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.discount_price || product.price}
            </span>
            {product.old_price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.old_price}
              </span>
            )}
          </div>
          {product.old_price && (
            <span className="text-sm text-green-600 font-medium">
              {product.discount_percentage}% OFF
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;