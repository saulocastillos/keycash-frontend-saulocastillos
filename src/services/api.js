import axios from 'axios';

const api = axios.create({
  baseURL: 'https://5e148887bce1d10014baea80.mockapi.io/keycash/challenge',
});

export default api;
