import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.201.225.149:5000',
  headers: {
    'Content-Type': 'application/json'
  },
});

export default instance;
