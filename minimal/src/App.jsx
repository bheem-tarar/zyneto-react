// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Dashboard from './pages/Dashboard';
// import UserManagement from './pages/UserManagement';
// import Products from './pages/Products';
// import ProductDetail from './pages/ProductDetail';

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-50 min-h-screen">
//         <Layout>
//           <Routes>
//             {/* <Route path="/" element={<Dashboard />} /> */}
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/users" element={<UserManagement />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/:id" element={<ProductDetail />} />
//           </Routes>
//         </Layout>
//       </div>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Products from './pages/Products';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import ProductDetail from './pages/ProductDetail';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;