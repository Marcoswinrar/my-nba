import { Team } from "./team";
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

interface GameStatus {
  clock: any;
  halftime: boolean;
  short: number;
  long: string;
}

interface GamePeriod {
  current: number;
  total: number;
  endOfPeriod: boolean;
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

interface Scores {
  visitors: Score;
  home: Score;
}

interface Score {
  win: number;
  loss: number;
  series: Object;
  linescore: Array<string>;
  points: number;
}