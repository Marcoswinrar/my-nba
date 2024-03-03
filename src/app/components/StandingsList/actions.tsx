import { Standings } from "@/app/domain/interfaces/standings";
import { formatStandingsByConference } from "@/app/domain/utils/standingsByConference";

export const getTeamsByConference = (standings: Standings[]) =>
  formatStandingsByConference(standings)