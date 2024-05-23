import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './pages/components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const currentURI = window.location.href.split('/').at(-1);
  const inAuth = currentURI == "login" || currentURI == "signup";

  return (
    <>
      <BrowserRouter>
      <div className={ inAuth ? '' : 'mx-3 lg:mx-40 h-dvh'}>

        {// Hide the header when logging in or signing up
        inAuth ?
          <></>:
          <Header/>
        }

        <div className={ inAuth ? '' : "p-6 lg:p-7"}>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
