import Image from "next/image"
import Link from "next/link"

const linkStyle = `
  hover:text-sky-400
`;
const navBarStyle = `
  mx-auto 
  p-3 
  lg:p-[3rem] 
  flex
  justify-between 
  items-center
  w-full
`;

const Navbar = () => {
  return (
    <header className={navBarStyle}>
      <Link href={"/"}>
        <Image
          alt="NBA Logo"
          src={`/images/nba-logo.svg`}
          width={96}
          height={56}
          fetchPriority="high"
        />
      </Link>
      <nav className="flex gap-6">
        <Link className={linkStyle} href={"/"}>Home</Link>
        <Link className={linkStyle} href={"/standings"}>Standings</Link>
      </nav>
    </header>
  )
}

export default Navbar;