import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeft, ShoppingCart, Heart, ChevronRight, Truck, RotateCcw } from 'lucide-react';
import { fetchProductDetail } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentProduct: product, loading, error } = useSelector(state => state.products);
  const { loading: cartLoading } = useSelector(state => state.cart);

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [activeTab, setActiveTab] = useState('description');

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
    return colorMap[color?.toLowerCase()] || 'bg-gray-400';
  };

  const handleAddToCart = () => {
    if (product && selectedSize) {
      dispatch(addToCart(product.id, 1, selectedColor, selectedSize));
    }
  };

  const handleCheckShipping = () => {
    console.log('Checking shipping for postal code:', postalCode);
  };

  const getProductColors = () => {
    if (!product.colors) return [];

    if (Array.isArray(product.colors)) {
      return product.colors;
    }

    if (typeof product.colors === 'string') {
      return product.colors.split(',').map(color => color.trim()).filter(color => color);
    }

    return [];
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetail(parseInt(id)));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      const colors = getProductColors();
      if (colors.length > 0) {
        setSelectedColor(colors[0]);
      }
      if (product.sizes && product.sizes.length > 0) {
        setSelectedSize(product.sizes[0]);
      }
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="h-96 bg-gray-200 rounded-lg"></div>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-16 h-16 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-20 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {error ? 'Error Loading Product' : 'Product Not Found'}
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const colors = getProductColors();

  const thumbnailImages = product.thumbnails || [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gray-100  sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-gray-900">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => navigate('/products')} className="hover:text-gray-900">Collection</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="overflow-auto max-h-[90vh]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-2">
                {thumbnailImages.slice(0, 6).map((img, index) => (
                  <button
                    key={index}
                    className="w-16 h-16 bg-white rounded border-2 border-transparent hover:border-gray-300 overflow-hidden flex-shrink-0"
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex-1">
                <div className="relative bg-white rounded-lg overflow-hidden">
                  {product.tag && (
                    <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${product.tag === 'SALE' ? 'bg-red-500 text-white' :
                        product.tag === 'NEW' ? 'bg-green-500 text-white' :
                          product.tag === 'FEATURED' ? 'bg-blue-500 text-white' :
                            'bg-blue-500 text-white'
                      }`}>
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.company} - {selectedColor} - {product.brand || product.company}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.discount_price || product.price}
                  </span>
                  {product.old_price && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.old_price}
                    </span>
                  )}
                  {product.old_price && product.discount_percentage && (
                    <span className="text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
                      {product.discount_percentage}% OFF
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
              </div>

              {colors.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-gray-900">Color: {selectedColor}</span>
                  </div>

                  <div className="flex space-x-2">
                    {colors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded border-2 transition-all ${getColorClass(color)} ${selectedColor === color
                            ? 'ring-2 ring-blue-500 ring-offset-2'
                            : 'hover:scale-110'
                          }`}
                        title={color}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-500">
                    {colors.length} color{colors.length > 1 ? 's' : ''} available
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">Size</span>
                  <button className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Size Guide <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex space-x-2 flex-wrap">
                  {(product.sizes || ['7 UK', '8 UK', '9 UK', '10 UK', '11 UK']).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded text-sm font-medium transition-colors ${selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex w-full">
                <button
                  onClick={handleAddToCart}
                  disabled={cartLoading || !selectedSize}
                  className="w-1/2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-4 px-6 transition-colors text-sm tracking-wide border border-green-600"
                >
                  {cartLoading ? 'ADDING...' : 'ADD TO CART'}
                </button>

                <button className="w-1/2 bg-white border border-green-600 text-green-600 hover:bg-green-50 font-bold py-4 px-6 transition-colors text-sm tracking-wide">
                  BUY NOW
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">
                  Check Shipping Availability
                </h3>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="POSTAL CODE"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                  <button
                    onClick={handleCheckShipping}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium transition-colors border border-green-600"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'description'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  DESCRIPTION
                </button>
                <button
                  onClick={() => setActiveTab('sizeGuide')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'sizeGuide'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  SIZE GUIDE
                </button>
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'delivery'
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                  FREE DELIVERY AND RETURNS
                </button>
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-gray-600 mb-4">
                      PRODUCT REF: {product.slug || product.id || 'NPM100082'}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {product.description ||
                        `${product.name} is a premium product from ${product.company}. This high-quality item features excellent craftsmanship and attention to detail. Perfect for those who appreciate style and functionality combined in one exceptional product.`}
                    </p>

                    <ul className="space-y-2 text-gray-700">
                      <li>• Premium construction and materials</li>
                      <li>• Available in multiple colors and sizes</li>
                      <li>• Superior comfort and durability</li>
                      <li>• Authentic brand quality</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Product Specifications</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Brand:</span>
                        <span className="text-gray-900">{product.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="text-gray-900">${product.discount_price || product.price}</span>
                      </div>
                      {product.old_price && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Original Price:</span>
                          <span className="text-gray-900">${product.old_price}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Available Colors:</span>
                        <span className="text-gray-900">{colors.length}</span>
                      </div>
                      {product.tag && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tag:</span>
                          <span className="text-gray-900">{product.tag}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'sizeGuide' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900">SIZE GUIDE</h3>
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Find Your Perfect Size <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      Find your perfect fit with our comprehensive size guide.
                    </p>
                    {product.sizes && (
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-semibold mb-2">Available Sizes:</h5>
                          <ul className="space-y-1">
                            {product.sizes.map((size, index) => (
                              <li key={index}>• {size}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'delivery' && (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Truck className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">FREE DELIVERY AND RETURNS</h3>
                      <p className="text-gray-700 mb-4">
                        Enjoy Free Returns using our easy returns process. We accept returns 15 days from receipt of your order.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Free shipping on orders over $50</li>
                        <li>• Standard delivery: 3-5 business days</li>
                        <li>• Express delivery: 1-2 business days</li>
                        <li>• Easy returns within 15 days</li>
                        <li>• Cash on delivery available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;