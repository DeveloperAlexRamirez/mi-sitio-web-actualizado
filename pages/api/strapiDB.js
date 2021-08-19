import axios from 'axios';

export const strapiDB = axios.create({
  baseURL: 'http://localhost:1337',
});
