import React from 'react';

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className='bg-primary py-12 relative'>
      <div className="container mx-auto">
        <p className='text-white text-center'>Copyright &copy; Ecommerce Shop {currentYear.getFullYear()}. All rights reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
