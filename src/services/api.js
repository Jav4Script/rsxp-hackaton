import axios from 'axios';

const baseURL = process.env.API_PATH || 'http://localhost:7071';
const api = axios.create({ baseURL });

export default api;
