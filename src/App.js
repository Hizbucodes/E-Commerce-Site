import React from 'react';

// importing Routes
import {Routes, Route} from 'react-router-dom';

// importing pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// importing components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

// import Helmet 
import { Helmet, HelmetProvider } from 'react-helmet-async';

const App = () => {
  return(
    <>
    <HelmetProvider>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Ecommerce - Shop</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="AUTUMN - ECommerce" />
     </Helmet>
     </HelmetProvider>
      <div className='overflow-hidden'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </div>
      </>
   )
};

export default App;
