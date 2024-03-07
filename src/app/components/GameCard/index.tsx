import { Game } from "@/app/domain/interfaces/game";
import GameTeam from "../GameTeam";
import GameStartTime from "../GameStartTime";
import Link from "next/link";
import GameInLive from "../GameInLive";

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
        {game?.status.long === 'In Play' &&
          <GameInLive game={game} />
        }
        {game?.status.long === 'Scheduled' &&
          <GameStartTime date={game?.date.start} />
        }
        {game?.status.long === 'Finished' &&
          <div className="flex flex-col w-full items-center">
            <span>Final</span>
            <div className="flex">
              {game.scores.home.points} - {game.scores.visitors.points}
            </div>
          </div>
        }
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
