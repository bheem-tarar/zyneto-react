import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import ProductCard from '../components/ProductCard';
import ShoppingCartFloat from '../components/ShoppingCart';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const { totalItems } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <p className="ml-[350px] p-8 text-center">Loading products...</p>;
  }

  if (error) {
    return (
      <div className="ml-[350px] p-8 text-center">
        <p>Error: {error}</p>
        <button
          onClick={() => dispatch(fetchProducts())}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="ml-[350px] h-screen flex flex-col overflow-y-auto">
      {/* Sticky Header */}
      <div className="bg-white px-6 py-8 top-0 z-10 shadow-sm ">
        <h1 className="text-3xl font-bold text-gray-900 ml-[22px]">Products</h1>
      </div>

      {/* Scrollable Product List */}
      <div className="px-6 pb-6 flex-1 ">
        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center mt-10">No products available.</p>
        )}
      </div>

      <ShoppingCartFloat itemCount={totalItems} />
    </div>
  );
};

export default Products;
