import { cardStatus } from "@/app/domain/entity/gameStatus";
import { Scores } from "@/app/domain/entity/scores";
import { GameStatus } from "@/app/domain/entity/status";

interface Props {
  status: GameStatus;
  score: Scores;
}

const GameFinished = ({ status }: Props) => {

  if(status.long !== cardStatus.finished) return null;

  return (
    <div className="flex items-center justify-end text-sm">
      <span>Ended</span>
    </div>
  )

}

export default GameFinished;