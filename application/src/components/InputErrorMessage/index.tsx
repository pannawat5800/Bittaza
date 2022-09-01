import { FunctionComponent } from 'react'

type Props = {
  children?: React.ReactNode
}
const InputErrorMessage: FunctionComponent<Props> = ({ children }) => {
  return <p className='text-red-600 text-sm'>{children}</p>
}

export default InputErrorMessage
