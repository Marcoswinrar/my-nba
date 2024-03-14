"use client";
import useSWR from "swr";
import GameList from "./components/GameList";
import { today } from "./domain/utils/getTodayDateWithoutUTC";
import { getGamesByDate } from "./data/repository/game";
import { mock } from "./mock-data";
import { Game } from "./domain/interfaces/game";

const Home = () => {  
  return (
    <GameList />
  )
}

export default Home;