import { fetcher } from "@/core/axios";

export const getGamesByDate = (date: string) =>
  fetcher.get('/games', { params: { date } }).then(({ data }) => data);


export const getGameById = (id: number) =>
  fetcher.get('/game', { params: { id } }).then(({data}) => data);