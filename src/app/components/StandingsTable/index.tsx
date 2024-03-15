import cn from "classnames";
import { StandingsContextType, useStandingsContext } from "@/app/domain/contexts/Standings";
import { Conferences } from "@/app/domain/entity/conferences";
import { isPlayin, isPlayoff } from "@/app/domain/use-cases/teamQualificationInTournament";
import { getActiveStandings } from "./actions";
import TeamLogo from "../TeamLogo";
interface Props {
  standings: Conferences;
}

const StandingsTable = ({ standings }: Props) => {
  const { conference } = useStandingsContext() as StandingsContextType;
  let keyName = conference as keyof Conferences;

  const standingColors = {
    playoff: 'bg-green-600',
    playin: 'bg-sky-600',
  };

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
                  .map((standing, index) => (
                    <tr key={standing.team.id} className="border-b dark:border-neutral-500">
                      <td className={`whitespace-nowrap px-6 py-4 font-medium text-center`}>
                        <div className={cn("rounded-full", {
                          [standingColors.playoff]: isPlayoff(index),
                          [standingColors.playin]: isPlayin(index),
                        })}>
                          {standing.conference.rank}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex items-center gap-4">
                        <TeamLogo team={standing.team.code} size={40} />
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
      <div className="flex justify-center pt-4">
        <div className="mr-6 flex items-center">
          <div className={`mr-2 h-5 w-10 rounded-full ${standingColors.playoff}`}></div>
          <span className="text-sm text-gray-400">Playoffs</span>
        </div>
        <div className="flex items-center">
          <div
            className={`mr-2 h-5 w-10 rounded-full ${standingColors.playin}`}></div>
          <span className="text-sm text-gray-400">Play-In Tournament</span>
        </div>
      </div>
    </div>
  )
};

export default StandingsTable;
