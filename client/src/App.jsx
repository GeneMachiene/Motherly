import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './pages/components/Header'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'

function App() {
  const currentURI = window.location.href.split('/').at(-1);
  const inAuth = currentURI == "login" || currentURI == "signup";

  return (
    <div className="grid grid-rows-12 h-screen">
      <BrowserRouter>

      {inAuth ? 
        <></>
        :
        <div className="row-span-1">
          <Header/>
        </div>
      }

        <div className={inAuth ? "row-span-12 min-w-0" : "overflow-y-auto row-span-11 bg-gray-100"}>
          <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Register />}/>
            <Route path='/profile' element={<Profile />}/>
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App