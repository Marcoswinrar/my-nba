import { client } from '../../core/axios'

export const getStandingsByStandardAndCurrentSeason = (season: string) =>
  client.get('standings', { params: { league: 'standard', season } }).then(({ data }) => data)
