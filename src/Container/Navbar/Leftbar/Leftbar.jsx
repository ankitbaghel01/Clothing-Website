
import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from "react-icons/io5";


const Leftbar = () => {
  return (
    <div className="flex gap-5 bg-black text-white">
      {/* Adjust the classes and styles as needed */}
     
        <FiInstagram className="text-white text-2xl" />
        <IoLogoTwitter className="text-white text-2xl" />

        {/* Optional text or label */}
      
    </div>
  );
};

export default Leftbar;
