import Header from "../Header";
import GameCard from "../GameCard";
import { Api } from "@/app/domain/entity/api";
import { today } from "@/app/domain/use-cases/getTodayDateWithoutUTC";
import { getGamesByDate } from "@/app/data/repository/game";
import useSWR from "swr";

const gridLayout = `
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  lg:gap-4
  gap-8
`;

const GameList = () => {
  const { data: games, isLoading } = useSWR<Api | null>(today, getGamesByDate, { refreshInterval: 150000 });

  if (isLoading) return <span>Loading...</span>
  if (!games?.response) return null;

  return (
    <>
      <Header title="Games for today" />
      <section className={gridLayout}>
        {games.response.map(game => (
          <GameCard key={game?.id} game={game} />
        ))}
      </section >
    </>
  )
}

export default GameList;