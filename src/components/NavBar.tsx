import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Avatar from "./atoms/Avatar";
import { Button } from "./atoms/Button";

interface NavabarProps {
  openDrawer: () => void
}

const Navbar = ({openDrawer}: NavabarProps) => {
  const userStore = useSelector((state: RootState) => state.authReducer)
  const { push } = useRouter()

  const redirect = (path: string) => {
    push(path)
  }
  return (
    <header className="flex items-center pr-24 pl-[70px] w-full h-16 bg-neutral-700">
      <nav className="w-full flex justify-between">
        <div className="text-slate-300 font-bold text-[32px] items-center cursor-pointer" onClick={() => redirect('/')}>
          Write.Me
        </div>
        <div className="flex items-center gap-x-4">
          {!userStore.isLogged ?
            <>
              <Button onClick={() => redirect('/auth/login')} size="small" secondary>
                Log In
              </Button>
              <Button onClick={() => redirect('/auth/register')} size="small">
                Sign Up
              </Button>
            </>
            :
            <div className="w-12 h-12" onClick={openDrawer}>
              <Avatar name={`${userStore.username}`} />
            </div>
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar;