import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './pages/components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='mx-3 lg:mx-40 h-dvh'>
        <Header/>
        <div className="p-6 lg:p-7">
          <Routes>
            <Route path='/' element={<Landing />}/>
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
