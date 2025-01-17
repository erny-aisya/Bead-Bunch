import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';

function HomePage() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h1>Welcome to Bead Bunch Shop</h1>
                <p>Your one-stop shop for customizable keychains and phone charms.</p>
                <ProductList />  {/* Display list of products */}
            </div>
        </div>
    );
}

export default HomePage;
