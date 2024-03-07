import Image from "next/image"
import { Team } from "@/app/domain/interfaces/team"
import { Score } from "@/app/domain/interfaces/score"

const gameTeamStyle = `
  flex 
  flex-col 
  justify-center
  gap-1 
  items-center 
  text-center 
  w-full h-full 
`;

interface Props {
  team: Team
  score: Score;
}

const GameTeam = ({ team, score }: Props) => {
  return (
    <div className={gameTeamStyle}>
      <Image
        style={{ minHeight: '40px', maxHeight: '48px'}}
        src={team?.logo}
        alt={team?.name}
        width={48}
        height={48}
        decoding="async"
      />
      <span>
        {team.nickname}
      </span>
    </div>
  )
}

export default GameTeam;