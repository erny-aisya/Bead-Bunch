import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProductList from './components/ProductList'; // Import if needed for specific routes
import Checkout from './components/Checkout'; // Import Checkout if needed

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
