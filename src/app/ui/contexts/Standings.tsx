import { ReactNode, createContext, useContext, useState } from "react";

export type StandingsContextType = {
  conference: string,
  handleConference: (conference: string) => void;
};

const StandingsContext =
  createContext<StandingsContextType | null>(null);

interface Props {
  children: ReactNode;
};

const StandingsProvider = ({ children }: Props) => {
  const [conference, setConference] = useState<string>("east");
  const handleConference = (conference: string) => setConference(conference);

  return (
    <StandingsContext.Provider
      value={{
        conference,
        handleConference
      }}
    >
      {children}
    </StandingsContext.Provider>
  )
}

const useStandingsContext = () => useContext(StandingsContext);
export { StandingsProvider, useStandingsContext };