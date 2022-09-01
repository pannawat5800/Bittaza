import React, { FunctionComponent } from 'react'

type Props = {
  children: React.ReactNode
}

const BarrierModal: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className=' fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-60 text-black '>
      <div className='relative w-full h-full flex justify-center items-center'>{children}</div>
    </div>
  )
}

export default BarrierModal
