import { useRouter } from "next/router";
import { Button } from "./atoms/Button";

const Navbar = () => {
  const { push } = useRouter()

  const redirect = () => {
    push('/auth/login')
  }
  return (
    <header className="flex items-center pr-24 pl-[70px] w-full h-16 bg-neutral-700">
      <nav className="w-full flex justify-between">
        <div className="text-slate-300 font-bold text-[32px] items-center">
          Write.Me
        </div>
        <div className="flex items-center gap-x-4">
          <Button onClick={redirect} size="small" secondary>
            Log In
          </Button>
          <Button onClick={() => null} size="small">
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;