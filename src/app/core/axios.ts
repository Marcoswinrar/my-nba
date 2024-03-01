import axios from "axios";

export const client = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com/',
  timeout: 10000,
  headers: { 
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
   }
});

