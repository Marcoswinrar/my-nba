import { Game } from "@/app/domain/interfaces/game";
import Header from "../Header";
import GameCard from "../GameCard";

const gridLayout = `
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-8
`;

interface Props {
  games: Game[];
}

const GameList = ({ games }: Props) => {
  return (
    <>
      <Header title="Games for today" />
      <section className={gridLayout}>
        {games?.length > 0 &&
          games.map(game => (
            <GameCard key={game?.id} game={game} />
          ))}
      </section >
    </>
  )
}

export default GameList;