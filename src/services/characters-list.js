import { baseUrl } from '../config/api';

export const getCharactersList = (url) => fetch(url || `${baseUrl}/api/character`, {
  method: 'GET',
}).then((res) => res.json());

export const fetCharactersList = (url) => fetch(url || `${baseUrl}/api/character`, {
  method: 'GET',
});
