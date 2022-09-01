import { Route, Routes } from 'react-router-dom'
import SignInPage from './pages/SignIn.page'
import DashboardPage from './pages/Dashboard.page'
import SignUpPage from './pages/SignUp.page'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/sign-in' element={<SignInPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route
        path='/'
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
