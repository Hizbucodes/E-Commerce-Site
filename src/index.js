import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import product provider
import ProductProvider from './contexts/ProductContext';

// import sideBar provider
import SidebarProvider from './contexts/SidebarContext';

// import cart provider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
