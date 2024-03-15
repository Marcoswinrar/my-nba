"use client";
import { Standings } from "@/app/domain/entity/standings";
import { StandingsProvider } from "@/app/ui/contexts/Standings";
import StandingsTable from "../StandingsTable";
import ConferencePicker from "../ConferencePicker";
import { getTeamsByConference } from "./actions";

interface Props {
  standings: Standings[];
};

const StandingsList = ({ standings }: Props) => (
  <StandingsProvider>
    <ConferencePicker />
    <StandingsTable standings={getTeamsByConference(standings)} />
  </StandingsProvider>
);

export default StandingsList;