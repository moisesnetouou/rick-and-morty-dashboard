import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/graphql',
});

export default api;
