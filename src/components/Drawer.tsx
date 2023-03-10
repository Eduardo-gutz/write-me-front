import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface DrawerProps {
  open: boolean,
  onClose?: () => void
  children: ReactNode
  side?: 'right' | 'left'
}

const Drawer = ({ open, onClose, children, side = 'right' }: DrawerProps) => {

  return (
    <div className={`w-80 h-[-webkit-fill-available] bg-neutral-700 border-2 border-neutral-800 absolute transition-all z-10 ${open ? 'right-0' : '-right-full'}`}>
      <AiOutlineClose className="text-slate-300 m-2" stroke="2.5" size={20} onClick={onClose} />
      {children}
    </div>
  )
}

export default Drawer