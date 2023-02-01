import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../atoms/Avatar";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutRedux } from "@/store/auth/auth.slice";
import { useMutation } from "react-query";
import { logout } from "@/services/auth/auth.service";

const DrawerContent = () => {
  const dispatch = useDispatch()
  const userStore = useSelector((state: RootState) => state.authReducer)
  const {mutate} = useMutation(logout)

  const handlerLogout = () => {
    mutate(userStore.id, {
      onSuccess() {
        dispatch(logoutRedux())
      }
    })

  }

  return (
    <div className="flex flex-col justify-between items-center w-10/12 mx-auto h-[90%]">
      <div className="w-24 h-24">
        <Avatar name={`${userStore.username}`} />
      </div>
      <button className="text-slate-300 text-lg flex items-center gap-3 self-start" onClick={handlerLogout}>
        <AiOutlineLogout size={40} className='text-slate-300' />
        Logout
      </button>
    </div>
  )
}

export default DrawerContent;