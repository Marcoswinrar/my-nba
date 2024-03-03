import Header from "@/app/components/Header";
import { getStandingsByStandardAndCurrentSeason } from "@/app/data/repository/standings";
import { formatStandingsByConference } from "@/app/domain/utils/standingsByConference";
import { formatTeamsByRanking } from "@/app/domain/utils/teamByRanking";
import { standings } from "@/app/mock-data";

const Standings = async () => {
  const { results, response, errors } = standings  
  const { east, west } = formatStandingsByConference(response)

  return (
    <>
      <Header title="Standings" />
      <div className="flex w-full gap-7">
        <section className="east">
          {formatTeamsByRanking(east)
            .map(({ team, conference }) => (
              <div key={team.id}>
                <span>{team.name}</span>
                <span>{conference.rank}</span>
              </div>
            ))}
        </section>
        <section className="west">
          {formatTeamsByRanking(west)
            .map(({ team, conference }) => (
              <div key={team.id}>
                <span>{team.name}</span>
                <span>{conference.rank}</span>
              </div>
            ))}
        </section>
      </div>
    </>
  )
}

export default Standings;