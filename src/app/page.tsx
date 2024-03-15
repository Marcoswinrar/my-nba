"use client";
import useSWR from "swr";
import GameList from "./components/GameList";
import { today } from "./domain/use-cases/getTodayDateWithoutUTC";
import { getGamesByDate } from "./data/repository/game";
import { mock } from "./mock-data";
import { Game } from "./domain/entity/game";

const Home = () => {  
  return (
    <GameList />
  )
}

export default Home;