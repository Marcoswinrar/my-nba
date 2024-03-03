import { Standings } from "../interfaces/standings";

const compareFn = (teamARanking: number, teamBRanking: number) =>
  teamARanking - teamBRanking;

export const formatTeamsByRanking = (teams: Standings[]) =>
  teams.sort((teamA, teamB) =>
    compareFn(teamA.conference.rank, teamB.conference.rank));