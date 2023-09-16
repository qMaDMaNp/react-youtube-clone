import axios from 'axios';

const host = 'youtube-v31.p.rapidapi.com';
export const BASE_URL = `https://${host}`;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

console.log(import.meta.env.VITE_RAPID_API_KEY);

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};