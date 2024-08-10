import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using Axios for HTTP requests

const AdminProducts = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken'); // Assuming you store the token in localStorage
      const response = await axios.post('http://13.201.225.149:5000/admin/products', {
        name,
        price,
        description,
        quantity,
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Include the authorization header with the token
        }
      });
      setMessage('Product added successfully!');
      setName('');
      setPrice(0);
      setDescription('');
      setQuantity(0);
    } catch (error) {
      if (error.response.status === 403) {
        setMessage('Invalid authorization. Please login as admin.');
      } else {
        setMessage('Error adding product: ' + error.message);
      }
    }
  };
  

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminProducts;