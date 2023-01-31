import { useEffect, useState } from "react"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface FieldTextProps {
  error?: boolean | string
  onChange: (value: string) => void
  value?: string
  defaultValue?: string
  id?: string
  name: string
  label: string
  password?: boolean
}

const FieldText = ({ error, onChange, defaultValue, value, label, name, id, password }: FieldTextProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const [valueInner, setValue] = useState<string>(value ?? '')
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    onChange(valueInner)
  }, [onChange, valueInner])

  return (
    <div className={`w-full h-14 rounded bg-slate-300 relative px-4 ${error ? 'border-red-400 border-2' : ''}`}>
      <label
        htmlFor={name}
        className={`absolute text-base font-medium top-2/4 -translate-y-1/2 z-10 transition-all ${focus || valueInner.length > 0 ? '-translate-y-[150%] text-xs' : '-translate-y-1/2'}`}
      >
        {label}
      </label>
      <input
        type={password && !isVisible ? 'password' : 'text'}
        name={name}
        id={id}
        className="absolute text-base font-medium top-2/4 -translate-y-[40%] w-11/12 focus-visible:outline-none bg-slate-300"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e) => setValue(e.target.value)}
        value={valueInner}
        defaultValue={defaultValue}
      />
      {password &&
        <span
          className="absolute top-1/2 right-4 -translate-y-1/2"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ?
            <AiFillEyeInvisible className='text-neutral-600' type="solid" size={32} />
            :
            <AiFillEye className='text-neutral-600' type="solid" size={32} />
          }
        </span>}
      {typeof error === 'string' &&
        <span className="absolute -bottom-[2px] text-sm font-medium text-red-500">{error}</span>
      }
    </div>
  )
}

export default FieldText