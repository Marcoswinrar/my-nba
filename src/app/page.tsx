"use client";
import useSWR from "swr";
import GameList from "./components/GameList";
import Header from "./components/Header";
import { today } from "./domain/utils/getTodayDateWithoutUTC";
import { getGamesByDate } from "./data/repository/game";

const Home = () => {
  const { data, isLoading } = useSWR(today, getGamesByDate, { refreshInterval: 20000 });

  return (
    <>
      <Header title="Games for today" />
      <GameList games={data?.response} />
    </>
  )
}

export default Home;