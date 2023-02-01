import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface DrawerProps {
  open: boolean,
  onClose?: () => void
  children: ReactNode
}

const Drawer = ({open, onClose ,children}: DrawerProps) => {
  return (
    <div className={`w-80 h-[-webkit-fill-available] bg-neutral-700 mt-[2px] absolute transition-all ${open ? 'right-0' : '-right-full'} `}>
      <AiOutlineClose className="text-neutral-900 m-2" stroke="2.5" size={20} onClick={onClose}/>
      { children }
    </div>
  )
}

export default Drawer