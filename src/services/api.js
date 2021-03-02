import axios from "axios";


const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    "Content-Type": "application/json",
  },
});

// Common api code like interceptors will come here
export default api;
