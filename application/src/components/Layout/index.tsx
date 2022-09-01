import { FunctionComponent } from 'react'
import { Navbar } from '../Navbar'

type Props = {
  children?: React.ReactNode
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className='h-screen flex flex-col items-stretch '>
      <Navbar></Navbar>
      <main className='flex-1 overflow-y-auto'>{children}</main>
    </div>
  )
}
