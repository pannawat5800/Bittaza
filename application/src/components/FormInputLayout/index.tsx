import { FunctionComponent } from 'react'

type Props = {
  label: string
  name: string
  children?: JSX.Element | JSX.Element[]
}

const FormInputLayout: FunctionComponent<Props> = ({ label, name, children }) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={name} className='font-medium text-sm'>
        {label}
      </label>
      {children}
    </div>
  )
}

export default FormInputLayout
