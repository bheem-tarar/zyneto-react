import { useState } from "react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 NDESTRUKT",
      price: "$35.17", 
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
      tag: "SALE",
      colors: ["green", "black"]
    },
    {
      id: 2,
      name: "Nike Space Hippie 04",
      price: "$57.22",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", 
      colors: ["black", "white"]
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus 37 A...",
      price: "$64.78",
      oldPrice: "$64.78",
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=300&fit=crop",
      tag: "SALE",
      colors: ["pink", "white"]
    },
    {
      id: 4,
      name: "Nike Blazer Low 77 Vintage",
      price: "$50.79",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=300&fit=crop",
      tag: "NEW", 
      colors: ["blue", "red"]
    }
  ];

  return (
    <div className="ml-72 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Shopping Cart */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-gray-900 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg relative">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({ title }) => {
  return (
    <div className="ml-72 p-6 flex items-center justify-center h-96">
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Package className="w-12 h-12 text-gray-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500">This section is currently empty.</p>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('product');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <EmptyState title="Dashboard" />;
      case 'user':
        return <EmptyState title="User Management" />;
      case 'product':
        return <ProductGrid />;
      default:
        return <ProductGrid />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'product' && <Header />}
      {renderContent()}
    </div>
  );
}