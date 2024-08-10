import React, { useEffect, useState } from 'react';
import axios from '../config.js';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://13.201.225.149:5000/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
    {products.map((product) => (
      <li
        className="border rounded-lg w-48 p-2 m-2 shadow-lg transition-transform transform hover:scale-105"
        key={product._id}
      >
        <img src={product.imageUrl} alt={product.name} className="w-full h-36 object-cover rounded-md" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-700 mt-1 text-sm">{product.description}</p>
        <p className="text-md font-bold mt-1">Price: ${product.price}</p>
        <button className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
          Add to Cart
        </button>
      </li>
    ))}
  </ul>
    </div>
  );
}

export default Products;
