import TeamLogo from "../TeamLogo";
import { Team } from "@/app/domain/entity/team"
import { Score } from "@/app/domain/entity/score";

const gameTeamStyle = `
  flex 
  w-full
  gap-1 
  items-center 
  text-center 
  text-sm 
`;

interface Props {
  team: Team;
  score: Score
}

const GameTeam = ({ team, score }: Props) => {
  return (
    <div className={gameTeamStyle}>
      <div className="flex items-center grow gap-2">
        <TeamLogo team={team?.code} />
        <span className="whitespace-nowrap w-[100px] text-left">
          {team.nickname}
        </span>
      </div>
      <span>{score?.points}</span>
    </div>
  )
}

export default GameTeam;