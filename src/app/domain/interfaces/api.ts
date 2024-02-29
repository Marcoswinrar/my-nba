import { Game } from "./game";

export type Api = {
  get: string;
  parameters: object;
  errors: Array<any>;
  results: number;
  response: Game[];
}