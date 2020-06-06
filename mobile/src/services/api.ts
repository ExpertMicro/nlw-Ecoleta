import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.107:3333'
});//192.168.1.107:19000

export default api;