import { GameStatus } from "@/app/domain/entity/status";
import { cardStatus } from "@/app/domain/entity/gameStatus";

interface Props {
  date: string;
  status: GameStatus;
}

const GameStartTime = ({ date, status }: Props) => {
  if (status?.long !== cardStatus.scheduled) return null;

  return (
    <span className="text-xs w-full text-center">
      {new Date(date)
        .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
    </span>
  )
}

export default GameStartTime;