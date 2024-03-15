import { Conference } from "./conference";
import { Team } from "./team";

export interface Standings {
  league: string;
  season: number;
  team: Team;
  conference: Conference;
  division: Division;
  win: ScoreStats;
  loss: ScoreStats;
  gamesBehind: string;
  streak: number;
  winStreak: boolean;
  tieBreakerPoints: any;
};


interface Division {
  name: string;
  rank: number;
  win: number;
  loss: number;
  gamesBehind: string;
};

interface ScoreStats {
  home: number;
  away: number;
  total: number;
  percentage: string;
  lastTen: number;
};