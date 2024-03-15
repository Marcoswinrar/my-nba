import { fetcher } from "@/core/axios";

export const getStandingsByStandardAndCurrentSeason = (season: string) =>
  fetcher.get('standings', { params: { league: 'standard', season } }).then(({ data }) => data);
