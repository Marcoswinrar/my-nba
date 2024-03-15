import { Game } from "@/app/domain/entity/game";
import GameStartTime from "../GameStartTime";
import GameFinished from "./finished";
import GameInPlay from "./inPlay";

interface Props {
  game: Game;
}

const GameStatus = ({ game }: Props) => {
  return (
    <section className="w-[5rem]">
      <GameFinished score={game?.scores} status={game?.status} />
      <GameInPlay game={game} />
      <GameStartTime date={game?.date.start} status={game?.status} />
    </section>
  )
}

export default GameStatus;