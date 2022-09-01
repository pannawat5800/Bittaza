import { FunctionComponent, useState } from 'react'
import CryptoIcon from '../assets/undraw_crypto_portfolio_2jy5.svg'
// import BitcoinIcon from '../assets/undraw_bitcoin_re_urgq.svg'
import { useForm, SubmitHandler } from 'react-hook-form'
import { SignIn } from '../models/authentication.model'
import Spiner from '../components/Spiner'
import { AuthenticationService } from '../services/authentication.service'
import { saveToken } from '../resources/storage.res'
import FormInputLayout from '../components/FormInputLayout'
import InputErrorMessage from '../components/InputErrorMessage'
import TextInput from '../components/TextInput'
import ErrorDialog from '../components/ErrorDialog'
import { AlertModal } from '../models/alert.model'
import { AxiosError } from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { isValidEmail } from '../resources/utils/format.util'

const SignInPage: FunctionComponent = () => {
  const authenticatonService = new AuthenticationService()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignIn>()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isDialogError, setIsDialogError] = useState<AlertModal>({ open: false })

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<SignIn> = (data) => handleOnSubmit(data)

  async function handleOnSubmit(data: SignIn): Promise<void> {
    console.log(data)
    try {
      setIsLoading(true)

      const result = await authenticatonService.signIn(data)
      saveToken(result)

      navigate('/', { replace: true })
    } catch (e) {
      const err = e as AxiosError
      if (err.response?.status === 404) {
        setIsDialogError({
          open: true,
          title: 'Your account is wrong',
          message: 'Username or Password are incorrect. please re-enter them again.',
        })
      } else {
        setIsDialogError({
          open: true,
          title: 'Sign In is failed.',
          message: 'Something is wrong with login. Please Contact to our support.',
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
        <div className='flex flex-col w-full items-stretch h-full rounded-none md:w-auto md:h-auto md:flex-row shadow-2xl border border-gray-900 border-opacity-10 md:rounded-lg'>
          <div className='w-full h-full md:w-96 rounded-l-lg bg-bgPrimary px-8 pt-10 pb-10 flex flex-col'>
            <p className='text-3xl font-semibold mb-5'>Sign In</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col space-y-5 items-stretch pb-5'
            >
              <FormInputLayout label='Email' name='email'>
                <TextInput
                  type='email'
                  {...register('email', { required: true, validate: handleEmailValidation })}
                />
                <InputErrorMessage>
                  {errors.email?.type === 'required' && 'Email is required'}
                </InputErrorMessage>
              </FormInputLayout>
              <FormInputLayout label='Password' name='password'>
                <TextInput type='password' {...register('password', { required: true })} />
                <InputErrorMessage>
                  {errors.password?.type === 'required' && 'Password is required'}
                </InputErrorMessage>
              </FormInputLayout>
              <div />
              <button className='py-3 rounded-md bg-primary hover:bg-lightPrimary inline-flex justify-center'>
                {isLoading ? <Spiner /> : <span>Log In</span>}
              </button>
            </form>

            <div className='flex justify-between items-center pt-5'>
              <Link to='/sign-up' className='font-normal underline text-green-500 cursor-pointer'>
                Register Account
              </Link>
            </div>
          </div>
          <div className='w-full md:w-96 bg-black bg-opacity-5 flex flex-col'>
            <div className='w-96 h-full flex flex-col px-5 space-y-7 pb-7 justify-center items-center'>
              <div className='flex flex-col space-y-1'>
                <p className='font-medium text-xl'>Trending</p>
                <p className='text-text-secondary text-medium'>
                  Provider service for trending cryptocurrency
                </p>
              </div>
              <img src={CryptoIcon} className='w-56 object-cover self-start md:self-center' />
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

export default SignInPage
