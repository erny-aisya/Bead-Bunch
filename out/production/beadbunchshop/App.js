import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes> {/* Replace Switch with Routes */}
                <Route path="/" element={<ProductList />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
    );
};

export default App;
