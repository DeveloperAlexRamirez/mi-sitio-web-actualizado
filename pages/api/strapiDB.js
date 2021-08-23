import axios from 'axios';

export const strapiDB = axios.create({
  baseURL: 'https://mi-app-strapi-heroku.herokuapp.com',
});
