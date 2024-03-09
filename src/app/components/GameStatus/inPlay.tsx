import { Game } from "@/app/domain/interfaces/game"
import { cardStatus } from "@/app/domain/interfaces/gameStatus";
import GamePeriod from "./period";

interface Props {
  game: Game
}

const GameInPlay = ({ game }: Props) => {
  if (game?.status.long !== cardStatus.isLive) return null;

  return (
    <section className="flex justify-center items-center gap-2 lg:gap-4 text-[1.4rem]">
      <span className="px-1">{game.scores.home.points}</span>
      <GamePeriod
        clockTime={game.status.clock}
        isHalfTime={game.status.halftime}
        period={game.periods}
      />
      <div className="px-1">
        {game.scores.visitors.points}
      </div>
    </section>
  )
}

export default GameInPlay;