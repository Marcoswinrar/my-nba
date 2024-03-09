import * as NBAIcons from "react-nba-logos";

export type Props = {
  team: string;
  size?: number;
}

const TeamLogo = ({ team, size = 60 }: Props) => {
  const Icon = NBAIcons[team as keyof typeof NBAIcons]

  return (
    <Icon size={size} />
  )
}

export default TeamLogo;