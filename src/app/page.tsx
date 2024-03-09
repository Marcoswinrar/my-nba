"use client";
import useSWR from "swr";
import GameList from "./components/GameList";
import Header from "./components/Header";
import { today } from "./domain/utils/getTodayDateWithoutUTC";
import { getGamesByDate } from "./data/repository/game";
import { mock } from "./mock-data";

const Home = () => {
  const { data, isLoading } = useSWR(today, getGamesByDate, { refreshInterval: 20000 });
  // const { results, response} = mock

  console.log(data);

  return (
    <GameList games={data?.response} />
  )
}

export default Home;