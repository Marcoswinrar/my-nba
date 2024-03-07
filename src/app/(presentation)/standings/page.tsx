
import Header from "@/app/components/Header";
import StandingsList from "@/app/components/StandingsList";
import { Api } from "@/app/domain/interfaces/api";
import { standings } from "@/app/mock-data";

const Standings = async () => {
  // const {response, results, errors} = await getStandingsByCurrentSeason("2023");

  return (
    <>
      <Header title="Standings" />
      {/* <StandingsList standings={response}/> */}
    </>
  )
}

export default Standings;