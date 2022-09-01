import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className='px-3 py-2 rounded bg-white bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-lightPrimary'
    />
  )
})

export default TextInput
