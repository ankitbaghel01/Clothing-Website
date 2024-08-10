import React from 'react'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";

const Rightbar = () => {
  return (
    <div>
      <ul className="flex space-x-4 ">
      <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
      <li><Link to="/products" className="hover:text-gray-400">Products</Link></li>
      
      <li><Link to="/cart" className="hover:text-gray-400"><CiShoppingCart className='text-2xl'/></Link></li>
       
      </ul>
    </div>
  )
}

export default Rightbar
