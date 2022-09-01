import { FunctionComponent } from 'react'

export const Navbar: FunctionComponent = () => {
  return (
    <nav className='bg-primary px-3 md:px-0'>
      <div className='flex justify-between items-center py-3 container mx-auto'>
        <p className='text-base md:text-xl lg:text-2xl font-bold'>Dashboard</p>
        <div className='flex space-x-1 md:space-x-3 items-center'>
          <img
            className='w-6 h-6 md:w-8 md:h-8 rounded-full object-cover'
            src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          />
          <p className='text-sm md:text-base'>Arnansup Sonsom</p>
        </div>
      </div>
    </nav>
  )
}
