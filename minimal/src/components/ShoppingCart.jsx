
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { fetchCart } from '../store/actions/cartActions';

const ShoppingCartFloat = ({ itemCount = 0 }) => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector(state => state.cart);
  
  // Use Redux totalItems if available, otherwise use prop
  const displayCount = totalItems || itemCount;

  const handleCartClick = () => {
    console.log('Cart clicked');
    // Fetch latest cart data
    dispatch(fetchCart());
    // Navigate to cart page or open cart modal
    // navigate('/cart'); // if using react-router
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleCartClick}
        className="bg-gray-900 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg relative hover:bg-gray-800 transition-colors group"
      >
        <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
        {displayCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium animate-pulse">
            {displayCount > 99 ? '99+' : displayCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ShoppingCartFloat;
