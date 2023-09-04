import React, { useContext } from 'react';

// import link
import { Link } from 'react-router-dom';

// import icons

import { BsPlus, BsEyeFill } from 'react-icons/bs';

// import cart context
import { CartContext } from '../contexts/CartContext';
 
const Product = ({product}) => {
  const {addToCart} = useContext(CartContext);

  // destructure product

  const {id, image, category, title, price } = product;
  return(
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* image */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover: scale-110 transition duration-300' src={image} alt="" />
        </div>
      </div>
      {/* buttons */}
      <div className='absolute top-0 right-0 bg-red-500'>
        <button onClick={()=> addToCart(product, id)}>
          <div className='flex justify-center items-center text-white w-12 h-12'>
            <BsPlus className='text-3xl'/>
          </div>
        </button>
        <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>

          <BsEyeFill/>
        </Link>
      </div>
    </div>
    {/* {category} */}
    <div>
      <div className='text-sm capitalize text-gray-500'>{category}</div>
      <Link to={`/product/${id}`}>
      <h2 className='font-semibold mb-1'>{title}</h2>
      </Link>
      <div className='font-semibold'>$ {price}</div>
    </div>
  </div>
  )
};

export default Product;
