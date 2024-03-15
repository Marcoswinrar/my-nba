import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({children}: Props) => (
  <div className="z-[1] flex flex-grow flex-col min-h-screen">
    {children}
  </div>
)

export default Layout;