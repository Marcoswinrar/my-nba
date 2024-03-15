import { StandingsContextType, useStandingsContext } from "@/app/ui/contexts/Standings";
import { getActive } from "./actions";

const buttonDefaultStyle = `
  p-5 
  w-full 
  hover:text-sky-400
`;

const conferencePickerStyle = `
  w-full 
  flex 
  justify-between 
  rounded-none 
  mb-[2rem] 
  bg-glass
  max-md:text-sm
`;

const ConferencePicker = () => {
  const { conference, handleConference } = useStandingsContext() as StandingsContextType;

  return (
    <section className={conferencePickerStyle}>
      <button
        onClick={() => handleConference("east")}
        className={`${buttonDefaultStyle}${getActive(conference, "east")}`}>
        eastern conference
      </button>
      <button
        onClick={() => handleConference("west")}
        className={` ${buttonDefaultStyle} ${getActive(conference, "west")}`}>
        western conference
      </button>
    </section>
  )
};

export default ConferencePicker;