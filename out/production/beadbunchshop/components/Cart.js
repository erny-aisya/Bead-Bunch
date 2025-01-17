// src/components/Cart.js
import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // Fetch cart data (from localStorage or an API)
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    return (
        <div className="cart">
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;
