import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://13.201.225.149:5000/admin/login', {
        username,
        password,
      });

      // Securely store access token in localStorage (consider HttpOnly flag)
      localStorage.setItem('accessToken', response.data.accessToken);
      // **Optional:** Set HttpOnly flag for added security (server-side configuration)

      setMessage('');
      navigate('/admin/products'); // Navigate to /admin/products on success
    } catch (error) {
      if (error.response.status === 401) {
        setMessage('Invalid username or password.');
      } else {
        setMessage('Error logging in: ' + error.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AdminLogin;