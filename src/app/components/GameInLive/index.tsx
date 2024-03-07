import { Game } from "@/app/domain/interfaces/game"

interface Props {
  game: Game
}

const GameInLive = ({ game }: Props) => {
  return (
    <section className="flex flex-col w-full justify-center align-center items-center">
      <span>Live !!!</span>
      <span>{game.status.clock}</span>
      <div>
        <span>{game.scores.home.points} - {game.scores.visitors.points}</span>
      </div>
    </section>
  )
}

export default GameInLive;