import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Shop.css';


const Shop = () => {
    // Show first 10 Products
    const first10 = fakeData.slice(0, 15);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);
    const handelAddProduct = (product) => {
        // console.log(" added product", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className= "product-container">
                {
                    products.map(pd => <Product 
                        handelAddProduct = {handelAddProduct} 
                        product= {pd}>

                    </Product>)
                    
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;