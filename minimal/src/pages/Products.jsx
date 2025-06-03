import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import ProductCard from '../components/ProductCard';
import ShoppingCartFloat from '../components/ShoppingCart';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const { totalItems } = useSelector(state => state.cart);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];
  const totalPages = products ? Math.ceil(products.length / productsPerPage) : 0;

  // Pagination logic
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
    <div className="h-screen flex flex-col overflow-y-auto">
      <div className="bg-gray-100 px-6 py-8 top-0 z-10 shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 ml-[22px]">Products</h1>
      </div>

      <div className="px-6 pb-6 flex-1">
        {currentProducts && currentProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-1 py-8 mt-8 bg-white border-t border-gray-200">
                <button
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md transition-colors ${currentPage === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageClick(page)}
                    disabled={page === '...'}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${page === currentPage
                        ? 'bg-blue-500 text-white shadow-sm'
                        : page === '...'
                          ? 'text-gray-400 cursor-default'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md transition-colors ${currentPage === totalPages
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center mt-10">No products available.</p>
        )}
      {/* </div> */}
      <nav aria-label="Pagination Navigation" class="flex justify-center">
        <ul class="flex items-center space-x-2">
          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-150"
              tabindex="0"
              type="button"
              aria-label="Go to previous page"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              </svg>
            </button>
          </li>

          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="page 1"
              aria-current="page"
            >
              1
            </button>
          </li>

          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="Go to page 2"
            >
              2
            </button>
          </li>

          {/* <!-- Page 3 --> */}
          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="Go to page 3"
            >
              3
            </button>
          </li>

          {/* <!-- Page 4 --> */}
          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="Go to page 4"
            >
              4
            </button>
          </li>

          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="Go to page 5"
            >
              5
            </button>
          </li>

          <li>
            <div class="flex items-center justify-center w-9 h-9 text-gray-400 text-sm">
              ...
            </div>
          </li>

          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-full focus:outline-none transition-colors duration-150 font-medium text-sm"
              tabindex="0"
              type="button"
              aria-label="Go to page 10"
            >
              10
            </button>
          </li>

          <li>
            <button
              class="flex items-center justify-center w-9 h-9 text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-150"
              tabindex="0"
              type="button"
              aria-label="Go to next page"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      </div>

      <ShoppingCartFloat itemCount={totalItems} />
    </div>
  );
};

export default Products;


