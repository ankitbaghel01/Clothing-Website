import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Container/Navbar/Navbar';
import Home from './Container/Home/Home';
import Login from './Container/Login/Login';
import Register from './Container/Register/Register';
import AdminProducts from './Container/Admin/AdminProducts';
import Products from './Container/Products/Products';
import Cart from './Container/Cart/Cart';
import AdminLogin from './Container/Admin/AdminLogin';
import './App.css'
const App = () => {
  return ( 
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />

        
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
