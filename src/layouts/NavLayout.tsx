import Navbar from "@/components/NavBar"

const NavLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default NavLayout