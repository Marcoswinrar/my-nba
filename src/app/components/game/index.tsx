import { Game } from "@/app/domain/interfaces/game"
import Image from "next/image";

interface Props {
  game: Game;
}

const Game = ({ game }: Props) => {
  return (
    <section
      key={game?.id}
      className="flex justify-between p-8 bg-zinc-700"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src={game?.teams.home.logo}
          alt={game?.teams.home.name}
          width={48}
          height={48}
          decoding="async"
        />
        <span>
          {game?.teams.home.name}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-center">
        <Image
          src={game?.teams.visitors.logo}
          alt={game?.teams.visitors.name}
          width={48}
          height={48}
          decoding="async"
        />
        <span>
          {game?.teams.visitors.name}
        </span>
      </div>
    </section>
  )
}

export default Game
