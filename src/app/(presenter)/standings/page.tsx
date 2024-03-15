
import Header from "@/app/ui/components/Header";
import StandingsList from "@/app/ui/components/StandingsList";
import { standings } from "@/app/mock-data";

const Standings = async () => {
  const {response, results, errors} = standings;

  return (
    <>
      <Header title="Standings" />
      <StandingsList standings={response}/>
    </>
  )
}

export default Standings;