import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode
  biggest?: boolean
}

const Title = ({ children, biggest }: TitleProps) => {
  return <h1 className={`text-slate-300 ${biggest ? 'text-[32px] font-bold' : 'text-2xl'}`}>{ children }</h1>
}

export default Title;