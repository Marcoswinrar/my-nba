import { Standings } from "../interfaces/standings";

type Conferences = {
  east: Standings[];
  west: Standings[];
}

export const formatStandingsByConference = (standings: Standings[]) => {
  const conferences: Conferences = {
    east: [],
    west: []
  };

  standings.map((team) => {
    team.conference.name === 'east' ?
      conferences.east.push(team) :
      conferences.west.push(team);
  });
  
  return conferences;
}