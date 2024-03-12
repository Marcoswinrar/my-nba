import Link from "next/link";
import { Game } from "@/app/domain/interfaces/game";
import GameTeam from "../GameTeam";
import GameStatus from "../GameStatus";

const gameCardStyle = `
  flex
  items-center
  max-md:px-[1rem]
  px-[2rem]
  py-6
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
        <div className="flex flex-col grow">
          <GameTeam
            team={game?.teams.home}
            score={game?.scores.home}
          />
          <GameTeam
            team={game?.teams.visitors}
            score={game?.scores.visitors}
          />
        </div>
        <GameStatus game={game} />
      </article>
    </Link>
  )
}

export default GameCard;
