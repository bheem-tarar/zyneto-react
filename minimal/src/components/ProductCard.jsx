import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { ShoppingCart, Heart } from 'lucide-react';
// import { addToCart } from '../store/actions/cartActions';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

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

  // const handleAddToCart = (e) => {
  //   e.stopPropagation(); // Prevent navigation when clicking add to cart
  //   const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0] : null;
  //   dispatch(addToCart(product.id, 1, defaultColor));
  // };

  const handleWishlist = (e) => {
    e.stopPropagation();
    console.log('Added to wishlist:', product.id);
    // Implement wishlist functionality
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer group"
      onClick={handleProductClick}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover  transition-transform duration-300"
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
            {product.colors && product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${getColorClass(color)}`}
                title={color}
              />
            ))}
            {product.colors && product.colors.length > 3 && (
              <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-600">+{product.colors.length - 3}</span>
              </div>
            )}
          </div>
          <span className="text-sm text-gray-500">{product.company}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">{product.discountPrice || product.price}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
            )}
          </div>
          {/* {product.oldPrice && (
            <span className="text-sm text-green-600 font-medium">
              {((parseFloat(product.oldPrice.replace(', '')) - parseFloat(product.discountPrice.replace(', ''))) / parseFloat(product.oldPrice.replace(', '')) * 100).toFixed(0)}% OFF
            </span>
          )} */}
        </div>
        
        {/* <button
          onClick={handleAddToCart}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-600"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button> */}
      </div>
    </div>
  );
};

export default ProductCard;
