import { Conferences } from "@/app/domain/interfaces/conferences";
import { formatTeamsByRanking } from "@/app/domain/utils/teamByRanking";

export const getActiveStandings = (
  conference: keyof Conferences,
  standings: Conferences
) =>
  formatTeamsByRanking(standings[conference]);
