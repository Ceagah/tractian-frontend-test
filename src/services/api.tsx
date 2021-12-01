import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://my-json-server.typicode.com/tractian/fake-api/',
});

export default api;