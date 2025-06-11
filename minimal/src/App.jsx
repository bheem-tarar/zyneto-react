// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import Products from './pages/Products';
// import Dashboard from './pages/Dashboard';
// import UserManagement from './pages/UserManagement';
// import ProductDetail from './pages/ProductDetail';
// import Advance from './pages/Advance';
// import Blog from './pages/Blog';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile'
// import Layout from './components/Layout';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/signin" element={<Signin />} />
//           <Route path="/signup" element={<Signup />} />

//           <Route
//             path="*"
//             element={
//               <Layout>
//                 <Routes>
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/users" element={<UserManagement />} />
//                   <Route path="/" element={<Products />} />
//                   <Route path="/advance" element={<Advance />} />
//                   <Route path="/products" element={<Products />} />
//                   <Route path="/products/:id" element={<ProductDetail />} />
//                   <Route path="/Blog" element={<Blog />} />
//                   <Route path="/Profile" element={<Profile />}/>
//                 </Routes>
//               </Layout>
//             }
//           />
//         </Routes>
//       </Router>
//     </Provider>
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
import Advance from './pages/Advance';
import Blog from './pages/Blog';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected / Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="advance" element={<Advance />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="blog" element={<Blog />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Optional: Catch-all 404 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
