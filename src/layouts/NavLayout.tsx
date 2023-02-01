import Drawer from "@/components/Drawer"
import Navbar from "@/components/NavBar"
import DrawerContent from "@/components/user/DrawerContent"
import { RootState } from "@/store/store"
import { useState } from "react"
import { useSelector } from "react-redux"

const NavLayout = ({ children }: any) => {
  const [drawerActive, setDrawerActive] = useState<boolean>(false)
  const userStore = useSelector((state: RootState) => state.authReducer)

  return (
    <>
      <Navbar openDrawer={() => setDrawerActive(!drawerActive)} />
      {userStore.isLogged &&
        <Drawer open={drawerActive} onClose={() => setDrawerActive(false)}>
          <DrawerContent />
        </Drawer>
      }
      {children}
    </>
  )
}

export default NavLayout