import React from 'react';

const Cards = ({ image, title, price }) => {
  return (
    <div className='w-60'>
      <div className="relative group w-60 mr-5 h-60 m-4 overflow-hidden rounded-md border-1 border-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-transform transform translate-y-full group-hover:translate-y-0">
          <p className="text-black bg-white border rounded-md flex items-center justify-center text-lg">Add to Card</p>
        </div>
      </div>
      <div className='m-4 text-center'>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Cards;
