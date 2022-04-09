import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';

import'./Shop.css'
const Shop = () => {
    const [products, serProducts] = useProducts()

    const [cart, serCart] = useState([])
    useEffect(() => {
        fetch('products.json')
    .then(res => res.json())
    .then(data => serProducts(data))}
    , [])
    const handleAddToCart = (product) => {
      const newCart = [...cart, product]
      serCart(newCart);
      addToDb(product.id)
      
  }
    return (
        <div className='shop-container'>
          <div className="products-container">
          {
           products.map(product => <Product 
           key ={product.id}
           product = {product}
           handleAddToCart = {handleAddToCart}
           ></Product>)
          }
          </div>
          <div className='cart-container'>
          <Cart cart = {cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;