import AuthPage from './components/AuthPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard.jsx'

const App = () => {
  const token =localStorage.getItem("authToken")
  if(token){
    return <>
      <Dashboard/>
    </>
  }
  return (
    <>
      <AuthPage />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App