import { useEffect, FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAccessToken } from '../../resources/storage.res'

type Props = {
  children: React.ReactNode
}

const ProtectedRoute: FunctionComponent<Props> = ({ children }) => {
  const access = getAccessToken()
  const navigate = useNavigate()

  useEffect(() => {
    if (!access) navigate('/sign-in')
  }, [])

  return access ? <>{children}</> : <div></div>
}

export default ProtectedRoute
