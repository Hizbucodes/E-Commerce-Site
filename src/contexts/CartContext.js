import React, { createContext, useState, useEffect } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({children}) => {
  // cart state
  const [cart, setCart] = useState([]);

  //item amount state
  const[itemAmount, setItemAmount] = useState(0);

  // total amount state
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    const total = cart.reduce((acc, currAmount)=>{
      return acc + currAmount.price * currAmount.amount;
    }, 0)

    console.log(total);
    setTotalAmount(total);
  });

  // update item amount
  useEffect(()=>{
    if(cart){
      const amount = cart.reduce((acc, currAmount)=>{
        return acc + currAmount.amount;
      }, 0);

      setItemAmount(amount);
     
    }
  }, [cart]); 

  // add to cart
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1}
   // check if the item is already in the cart
   const cartItem = cart.find((item)=>{
    return item.id === id;
   });
   console.log(cartItem);
   if(cartItem){
    const newCart = [...cart].map(item=>{
      if(item.id === id){
        return {...item, amount: cartItem.amount + 1};
      }else{
        return item;
      }
    });
     
    setCart(newCart);
   }else{
    setCart([...cart, newItem]);
   }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
    return item.id !== id;
    } )

    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item)=> (
      item.id === id
    ));
    
    addToCart(cartItem, id);
  };

  // decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find(item => {
      return item.id === id
    })

    if(cartItem){
      const newCart = cart.map(item => {
        if(item.id === id){
          return {...item, amount: cartItem.amount - 1};
        }else{
          return item;
        }
      });
      setCart(newCart);
    }
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    
  };

  console.log(cart);
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalAmount}}>{children}</CartContext.Provider>
  )
};

export default CartProvider;
