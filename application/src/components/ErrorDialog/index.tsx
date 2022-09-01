import { FunctionComponent } from 'react'
import BarrierModal from '../BarrierModal'

type Props = {
  title: string
  message?: string
  onClose?: () => void
}

const ErrorDialog: FunctionComponent<Props> = ({ title, message, onClose }) => {
  return (
    <BarrierModal>
      <div className='rounded-md w-64 bg-white shadow-lg flex flex-col justify-center items-center pt-5 pb-3 px-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-20 h-20 text-red-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
          />
        </svg>
        <p className='font-bold text-center pt-5 pb-2'>{title}</p>
        <p className='font-medium text-center text-sm'>{message}</p>
        <button
          onClick={onClose}
          className='bg-red-500 hover:bg-red-700 text-white w-full py-2 rounded-lg shadow-lg mt-5'
        >
          Close
        </button>
      </div>
    </BarrierModal>
  )
}

export default ErrorDialog
