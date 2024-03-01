interface Props {
  date: string;
}

const GameStartTime = ({ date }: Props) => (
  <span className="text-xs w-full text-center">
    {new Date(date)
      .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
  </span>
)

export default GameStartTime;