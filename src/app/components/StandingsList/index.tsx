"use client";
import { Standings } from "@/app/domain/interfaces/standings";
import StandingsTable from "../StandingsTable";
import ConferencePicker from "../ConferencePicker";
import { StandingsProvider } from "@/app/domain/contexts/Standings";
import { getTeamsByConference } from "./actions";

const gridLayout = `
  grid
  grid-cols-1
  lg:grid-cols-3
  gap-8
`;

interface Props {
  standings: Standings[];
};

const StandingsList = ({ standings }: Props) => {

  return (
    <StandingsProvider>
      <ConferencePicker />
      <section className={`w-full`}>
        <StandingsTable
          conferences={getTeamsByConference(standings)}
        />
      </section>
    </StandingsProvider>
  )
};

export default StandingsList;