import { ReactNode } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  secondary?: boolean
  size?: 'normal' | 'small' | 'big'
  disable?: boolean
}

enum SizesButton {
  small = 'min-w-[72px] px-[8px] min-h-[32px]',
  normal = 'min-w-[160px] px-[16px] min-h-[42px]',
  big = 'min-w-[192px] px-[16px] min-h-[42px]'
}

export const Button = ({ children, onClick, secondary, size = 'normal', disable }: ButtonProps) => {

  const getClasses = () => {
    const base = secondary ? 'bg-transparent text-slate-300' : 'bg-slate-300 text-neutral-800'
    const sizeButton = (SizesButton as any)[size]

    return `${base} ${sizeButton} rounded font-medium ${disable ? 'opacity-60' : ''}`
  }
  return (
    <button className={getClasses()} onClick={onClick} disabled={disable}>
      {children}
    </button>
  )
}
