import { Team } from "./team";
import { GameStatus } from "./status";
import { Scores } from "./scores";
import { GamePeriod } from "./period";
export interface Game {
  id: number;
  league: string;
  season: number;
  date: GameDate;
  stage: number;
  status: GameStatus;
  periods: GamePeriod;
  arena: GameArena;
  teams: GameTeams;
  scores: Scores;
}

interface GameDate {
  start: string;
  end: string;
  duration: string;
}

interface GameArena {
  name: string;
  city: string;
  state: string;
  country: string;
}

interface GameTeams {
  visitors: Team;
  home: Team;
}


