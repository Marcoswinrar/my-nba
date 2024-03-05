import { Api } from "@/app/domain/interfaces/api";
import { mock } from "./mock-data";
import GameList from "./components/GameList";
import { getGamesByDate } from "./data/repository/game";


const Home = async () => {
  const { results, response, errors }:
    Api = mock; 

  return (
    <GameList games={response}/>
  )
}

export default Home;