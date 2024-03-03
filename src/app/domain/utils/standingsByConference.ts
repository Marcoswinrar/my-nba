import { Conferences } from "../interfaces/conferences";
import { Standings } from "../interfaces/standings";

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