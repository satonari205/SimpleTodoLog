import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost',
  headers: {
    'Content-Type':'application/json',
    'Accept' : 'application/json',
  },
  withCredentials: true,
});

export default api;