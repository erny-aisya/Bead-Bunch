// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
    const [formData, setFormData] = useState({ name: '', address: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle order submission, e.g., send data to backend API
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <label>Address:</label>
            <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <button type="submit">Submit Order</button>
        </form>
    );
};

export default Checkout;
