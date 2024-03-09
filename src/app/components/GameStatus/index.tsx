import { Game } from "@/app/domain/interfaces/game";
import GameStartTime from "../GameStartTime";
import GameFinished from "./finished";
import GameInPlay from "./inPlay";

interface Props {
  game: Game;
}

const GameStatus = ({ game }: Props) => {
  return (
    <>
      <GameFinished score={game?.scores} status={game?.status} />
      <GameInPlay game={game} />
      <GameStartTime date={game?.date.start} status={game?.status} />
    </>
  )
}

export default GameStatus;