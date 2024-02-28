import { client } from '@/app/core/axios'

export const getGamesByDate = (date: string) =>
  client.get('/games', { params: { date } }).then(({ data }) => data)