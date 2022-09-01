import { AxiosError } from 'axios'
import { FunctionComponent, useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import CryptoIcon from '../assets/undraw_crypto_portfolio_2jy5.svg'
import ErrorDialog from '../components/ErrorDialog'
import FormInputLayout from '../components/FormInputLayout'
import InputErrorMessage from '../components/InputErrorMessage'
import Spiner from '../components/Spiner'
import TextInput from '../components/TextInput'
import { AlertModal } from '../models/alert.model'
import { SignUp } from '../models/authentication.model'
import { isValidEmail } from '../resources/utils/format.util'
import { AuthenticationService } from '../services/authentication.service'

const SignUpPage: FunctionComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUp>()

  const authenticatonService = new AuthenticationService()
  const navigator = useNavigate()

  const onSubmit: SubmitHandler<SignUp> = (data) => handleOnSubmit(data)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDialogError, setIsDialogError] = useState<AlertModal>({ open: false })

  const password = useRef({})
  password.current = watch('password', '')

  async function handleOnSubmit(data: SignUp): Promise<void> {
    setIsLoading(true)

    try {
      delete data.confirmPassword
      await authenticatonService.signUp(data)
      navigator('/sign-in')
    } catch (e) {
      console.log('error: ', e)
      const err = e as AxiosError
      if (err.response?.status === 400) {
        setIsDialogError({
          open: true,
          title: 'Email has been used already',
          message: 'Please make registration with another you email account.',
        })
      } else {
        setIsDialogError({
          open: true,
          title: 'Something is worng!',
          message:
            'Cannot allow users make registration. Please contact our support to solve problem.',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailValidation = (email: string): boolean => {
    console.log('ValidateEmail was called with', email)

    const isValid = isValidEmail(email)

    const validityChanged = (errors.email && isValid) || (!errors.email && !isValid)
    if (validityChanged) {
      console.log('Fire tracker with', isValid ? 'Valid' : 'Invalid')
    }

    return isValid
  }

  return (
    <div className='relative w-screen h-screen bg-bgPrimary md:bg-primary'>
      <div className='h-full relative md:container md:mx-auto flex justify-center items-center'>
        <div className='h-full md:h-auto block md:flex shadow-2xl border border-gray-900 border-opacity-10 rounded-none md:rounded-lg'>
          <div className='w-96 rounded-l-lg bg-bgPrimary px-8 pt-10 pb-10 flex flex-col'>
            <p className='text-3xl font-semibold mb-5'>Sign Up</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col space-y-5 items-stretch '
            >
              <FormInputLayout label='Email' name='email'>
                <TextInput
                  type='email'
                  {...register('email', {
                    required: true,
                    validate: (value) => handleEmailValidation(value) || 'Email is invalid.',
                  })}
                />
                <InputErrorMessage>
                  {errors.email?.type === 'required' && 'Email is required'}
                </InputErrorMessage>
              </FormInputLayout>
              <FormInputLayout label='Password' name='password'>
                <TextInput
                  type='password'
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must have at least 8 characters',
                    },
                  })}
                />
                <InputErrorMessage>{errors.password && errors.password.message}</InputErrorMessage>
              </FormInputLayout>
              <FormInputLayout label='Confirm Password' name='confirmPassword'>
                <TextInput
                  type='password'
                  {...register('confirmPassword', {
                    required: 'Confirm password is required.',
                    validate: (value) => value === password.current || 'The passwords do not match',
                  })}
                />
                <InputErrorMessage>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </InputErrorMessage>
              </FormInputLayout>
              <FormInputLayout label='Firstname' name='firstName'>
                <TextInput type='text' {...register('firstName', { required: true })} />
                <InputErrorMessage>
                  {errors.firstName?.type === 'required' && 'Firstname is required'}
                </InputErrorMessage>
              </FormInputLayout>
              <FormInputLayout label='Lastname' name='lastName'>
                <TextInput {...register('lastName', { required: true })} />
                <InputErrorMessage>
                  {errors.lastName?.type === 'required' && 'Lastname is required'}
                </InputErrorMessage>
              </FormInputLayout>
              <button
                type='submit'
                className='mt-10 py-3 rounded-md bg-primary hover:bg-lightPrimary'
              >
                {isLoading ? <Spiner /> : <span>Confirm</span>}
              </button>
            </form>
          </div>
          <div className='hidden w-96 bg-black bg-opacity-5 relative md:flex md:flex-col py-5'>
            <div className='flex-1'>
              <div className='w-96 flex flex-col px-5 space-y-7 pb-7 justify-around'>
                <div className='flex flex-col space-y-1'>
                  <p className='font-medium text-xl'>Trending</p>
                  <p className='text-text-secondary text-medium'>
                    Provider service for trending cryptocurrency
                  </p>
                </div>
                <img src={CryptoIcon} className='w-56 object-cover self-center' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDialogError.open && (
        <ErrorDialog
          title={isDialogError.title || ''}
          message={isDialogError.message}
          onClose={() => setIsDialogError({ open: false })}
        />
      )}
    </div>
  )
}

export default SignUpPage
