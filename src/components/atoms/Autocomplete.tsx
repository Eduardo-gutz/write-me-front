import { useAutocomplete } from "@mui/material";
import { useMemo, useState } from "react"

export interface AutocompleteOption {
  value: string | number
  label: string
}

interface FieldTextProps {
  error?: boolean | string
  onChange: (value: AutocompleteOption) => void
  value?: AutocompleteOption
  defaultValue?: string
  id?: string
  name: string
  label: string
  disabled?: boolean
  options: AutocompleteOption[]
}

const Autocomplete = ({ error, onChange, defaultValue, value, label, name, id, disabled, options }: FieldTextProps) => {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused: focus
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: options,
    getOptionLabel: (option) => option.label ?? '',
  });
  const [valueInner, setValue] = useState<string>(value?.label ?? '')

  const onFilterOptions = useMemo(() => {
    return options.filter((option) => option.label.toLowerCase().includes(valueInner.toLowerCase()))
  }, [options, valueInner])

  const selectOption = (option: AutocompleteOption) => {
    setValue(option.label)
    onChange(option)
  }
  return (
    <>
      <div className={`w-full h-14 rounded bg-slate-300 relative px-4 ${error ? 'border-red-400 border-2' : ''} ${disabled ? 'opacity-60' : ''}`} {...getRootProps()}>
        <label
          htmlFor={name}
          className={`absolute text-base font-medium top-2/4 -translate-y-1/2 z-10 transition-all ${focus || valueInner.length > 0 ? '-translate-y-[150%] text-xs' : '-translate-y-1/2'}`}
        >
          {label}
        </label>
        <input
          {...getInputProps()}
          type={'text'}
          name={name}
          id={id}
          className="absolute text-base font-medium top-2/4 -translate-y-[40%] w-11/12 focus-visible:outline-none bg-slate-300"
          onChange={(e) => setValue(e.target.value)}
          value={valueInner}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        {typeof error === 'string' &&
          <span className="absolute -bottom-[2px] text-sm font-medium text-red-500">{error}</span>
        }
        {groupedOptions.length > 0 ? (
          <ul className={`bg-slate-300 absolute top-[110%] w-full right-0 shadow-md z-20 rounded p-4 transition-all max-h-60`} {...getListboxProps()}>
            {onFilterOptions.map((option, index) =>
              <li key={option.value} {...getOptionProps({ option, index })} className="h-7 font-semibold cursor-pointer" onClick={() => selectOption(option)} >{option.label}</li>
            )}
          </ul>
        ) : null}
      </div>
    </>
  )
}

export default Autocomplete