import axios from "axios";

export const fetcher = axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com/',
  timeout: 10000,
  headers: { 
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
   }
});

