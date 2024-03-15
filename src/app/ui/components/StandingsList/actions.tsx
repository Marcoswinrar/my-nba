import { Standings } from "@/app/domain/entity/standings";
import { formatStandingsByConference } from "@/app/domain/use-cases/standingsByConference";

export const getTeamsByConference = (standings: Standings[]) =>
  formatStandingsByConference(standings)