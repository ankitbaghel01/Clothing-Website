import React, { useState } from 'react';
import WhiteBorder from './WhiteBorder/WhiteBorder';
import { Link } from 'react-router-dom';
import Leftbar from './Leftbar/Leftbar';
import Rightbar from './Rightbar/Rightbar';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <WhiteBorder />
      <div className="bg-black text-white p-4 md:p-16 flex justify-between items-center">
       
        {/* Sidebar Button for Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {sidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <p className='text-2xl'>Clothing Website</p>
        <div className='text-2xl md:hidden lg:hidden'>
        <Link to="/cart" className="hover:text-gray-400"><CiShoppingCart className='text-2xl '/></Link>
        </div>
<div className='hidden md:flex md:gap-5'>
<Rightbar/>
  </div>    
      </div>


      {/* Sidebar for Mobile */}
      <div
        className={`md:hidden bg-black text-white fixed inset-y-0 left-0 w-64 shadow z-50 transform transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          {/* Close Button */}
          <button
            className="text-white self-end focus:outline-none"
            onClick={closeSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Links */}
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
          Products
          </Link>
         
          <div>
            <Leftbar/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
