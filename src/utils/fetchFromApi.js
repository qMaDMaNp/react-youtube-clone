import axios from 'axios';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
  },
};

export const BASE_URL = `https://${import.meta.env.VITE_RAPID_API_HOST}`;

export const fetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};