import { cardStatus } from "@/app/domain/interfaces/gameStatus";
import { Scores } from "@/app/domain/interfaces/scores";
import { GameStatus } from "@/app/domain/interfaces/status";

interface Props {
  status: GameStatus;
  score: Scores;
}

const GameFinished = ({ status, score }: Props) => {

  if(status.long !== cardStatus.finished) return null;

  return (
    <div className="flex flex-col w-full items-center max-sm:text-sm">
      <span>Final</span>
      <div className="flex">
        {score.home.points} - {score.visitors.points}
      </div>
    </div>
  )

}

export default GameFinished;