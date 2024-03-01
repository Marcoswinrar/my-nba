
interface Props {
  title: string;
}

const Header = ({title}: Props) => {
  return (    
    <h1 className="text-2xl pb-5">{title} →</h1>
  )
}

export default Header;
