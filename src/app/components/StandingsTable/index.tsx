import { StandingsContextType, useStandingsContext } from "@/app/domain/contexts/Standings";
import { Conferences } from "@/app/domain/interfaces/conferences";
import { getActiveStandings } from "./actions";
import Image from "next/image";

interface Props {
  standings: Conferences;
}

const StandingsTable = ({ standings }: Props) => {
  const { conference } = useStandingsContext() as StandingsContextType;
  let keyName = conference as keyof Conferences;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Rank</th>
                  <th scope="col" className="px-6 py-4">Team</th>
                  <th scope="col" className="px-6 py-4">Win</th>
                  <th scope="col" className="px-6 py-4">Loss</th>
                  <th scope="col" className="px-6 py-4">Win %</th>
                  <th scope="col" className="px-6 py-4">Home Record</th>
                  <th scope="col" className="px-6 py-4">Road Record</th>
                  <th scope="col" className="px-6 py-4">L10 Streak</th>
                  <th scope="col" className="px-6 py-4">Streak</th>
                </tr>
              </thead>
              <tbody>
                {getActiveStandings(keyName, standings)
                  .map((standing) => (
                    <tr className="border-b dark:border-neutral-500">
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {standing.conference.rank}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center gap-4">
                        <Image
                          style={{maxHeight: '32px'}}
                          alt={standing.team.name} 
                          src={standing.team.logo} 
                          width={32} 
                          height={32} 
                          />
                        {standing.team.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{standing.win.total}</td>
                      <td className="whitespace-nowrap px-6 py-4">{standing.loss.total}</td>
                      <td className="whitespace-nowrap px-6 py-4">{standing.win.percentage}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {`${standing.win.home} - ${standing.loss.home}`}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {`${standing.win.away} - ${standing.loss.away}`}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {`${standing.win.lastTen} - ${standing.loss.lastTen}`}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{standing.streak}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default StandingsTable;
