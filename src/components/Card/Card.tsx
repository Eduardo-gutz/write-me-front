import { ReactNode } from "react";

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className="w-full min-h-fit bg-neutral-700 rounded">{ children }</div>
}

export default Card;