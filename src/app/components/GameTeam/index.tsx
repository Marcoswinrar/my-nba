import { Team } from "@/app/domain/interfaces/team"
import TeamLogo from "../TeamLogo";

const gameTeamStyle = `
  flex 
  flex-col 
  justify-center
  gap-1 
  items-center 
  text-center 
  w-1/4
`;

interface Props {
  team: Team;
}

const GameTeam = ({ team }: Props) => {
  return (
    <div className={gameTeamStyle}>
      <TeamLogo team={team?.code} />
      <span className="text-sm whitespace-nowrap w-[100px]">
        {team.nickname}
      </span>
    </div>
  )
}

export default GameTeam;