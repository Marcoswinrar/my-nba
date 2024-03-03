import { Conference } from "@/app/domain/interfaces/conference";
import { Team } from "@/app/domain/interfaces/team";

interface Props {
  team: Team;
  conference: Conference;
}

const StandingsItem = ({ team, conference }: Props) => {
  return (
    <div key={team.id}>
      <span>{team.name}</span>
      <span>{conference.rank}</span>
    </div>
  )
}

export default StandingsItem;