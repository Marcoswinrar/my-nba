import Link from "next/link";
import { Game } from "@/app/domain/interfaces/game";
import GameTeam from "../GameTeam";
import GameStatus from "../GameStatus";

const gameCardStyle = `
  flex
  justify-between
  items-center 
  sm:px-[2rem]
  py-8
  bg-glass
  border 
  border-zinc-500 
  rounded   
  hover:cursor-pointer 
  hover:bg-slate-700
`;

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Link href={"/game"}>
      <article
        key={game?.id}
        className={gameCardStyle}
      >
        <GameTeam team={game?.teams.home}/>
        <GameStatus game={game} />
        <GameTeam team={game?.teams.visitors}/>
      </article>
    </Link>
  )
}

export default GameCard;
