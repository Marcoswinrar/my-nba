import { Conferences } from "@/app/domain/entity/conferences";
import { formatTeamsByRanking } from "@/app/domain/use-cases/teamByRanking";

export const getActiveStandings = (
  conference: keyof Conferences,
  standings: Conferences
) =>
  formatTeamsByRanking(standings[conference]);

