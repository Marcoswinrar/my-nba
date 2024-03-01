import { Game } from "@/app/domain/interfaces/game";
import GameTeam from "../GameTeam";
import GameStartTime from "../GameStartTime";
import Link from "next/link";

const gameCardStyle = `
  flex
  justify-between
  items-center 
  p-8 
  bg-glass
  border 
  border-zinc-500 
  rounded   
  duration-300 
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
        <GameTeam
          team={game?.teams.home}
          score={game?.scores.home}
        />
        <GameStartTime date={game?.date.start} />
        <GameTeam
          team={game?.teams.visitors}
          score={game?.scores.visitors
          }
        />
      </article>
    </Link>
  )
}

export default GameCard;
