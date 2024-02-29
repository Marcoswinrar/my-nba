import Header from "./components/header";
import Game from "./components/game";
import { getGamesByDate } from "@/app/data/repository/games";
import { Api } from "@/app/domain/interfaces/api";

const Home = async () => {
  const { results, response, errors }:
    Api = await getGamesByDate('2024-02-29')

  return (
    <>
      <Header title="Games for today" /> <span>{results}</span>
      <section className="">
        {response?.length > 0 &&
          response.map(data => (
            <Game key={data?.id} game={data} />
          ))}
      </section >
    </>
  )
}

export default Home;