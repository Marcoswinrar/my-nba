import { Game } from "@/app/domain/interfaces/game"
import { cardStatus } from "@/app/domain/interfaces/gameStatus";
import GamePeriod from "./period";

interface Props {
  game: Game
}

const GameInPlay = ({ game }: Props) => {
  if (game?.status.long !== cardStatus.isLive) return null;

  return (
    <GamePeriod
      clockTime={game.status.clock}
      isHalfTime={game.status.halftime}
      period={game.periods}
    />
  )
}

export default GameInPlay;