import { client } from '../../core/axios'

export const getGamesByDate = (date: string) =>
  client.get('/games', { params: { date } }).then(({ data }) => data)


export const getGameById = (id: number) =>
  client.get('/game', { params: { id } }).then(({data}) => data)