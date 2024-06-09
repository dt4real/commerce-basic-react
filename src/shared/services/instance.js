import axios from 'axios';
const API = 'https://simple-commerce-backend.onrender.com';

export const instance = axios.create({
  baseURL: `${API}/api`
});
