// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products') // API to fetch products
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
