
import Header from "@/app/components/Header";
import StandingsList from "@/app/components/StandingsList";
import { standings } from "@/app/mock-data";

const Standings = async () => {
  const { results, response, errors } = standings

  return (
    <>
      <Header title="Standings" />
      <StandingsList standings={response}/>
    </>
  )
}

export default Standings;