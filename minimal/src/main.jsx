import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Correct
import App from './App';
import './index.css';
import setupLocatorUI from "@locator/runtime";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}
