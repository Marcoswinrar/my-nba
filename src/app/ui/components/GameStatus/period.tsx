import { GamePeriod } from "@/app/domain/entity/period";

interface Props {
  period: GamePeriod;
  isHalfTime: boolean;
  clockTime: string;
}

const GamePeriod = ({ period, isHalfTime, clockTime }: Props) => {

  return (
    <section className="flex flex-col justify-center items-center h-[3rem] ml-8 text-sm">
      <div className="flex items-center justify-center">
        <span className="pulse mr-1 inline-block h-2 w-2 rounded-full bg-red-700"></span>
        <span>Live</span>
      </div>
      <div className="flex gap-2">
        {(!isHalfTime && clockTime) &&
          <div>
            Q{period.current}
          </div>
        }
        <div className="text-center"> {
          isHalfTime ?
            <span>HALF</span>
            :
            <span>{clockTime}</span>
        }
        </div>
      </div>
    </section>
  )
}

export default GamePeriod;