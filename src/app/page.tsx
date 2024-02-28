import Header from "./components/header"
import { getGamesByDate } from "@/app/data/repository/games"
import { Game } from "@/app/domain/interfaces/game"

const Home = async () => {
  
  const games: Game[] = await getGamesByDate('2024-02-28')
  console.log(games)

  return (
    <>
      <Header title="Games for today" />
      {games?.length > 0 && games.map(game => (
        <div key={game?.id}>{game?.id}</div>
      )) }
    </>
  )
}

export default Home