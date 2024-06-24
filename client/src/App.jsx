import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useLocation } from 'react-router-dom';
import Landing from './pages/Landing'
import Header from './pages/components/Header'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import FAQs from './pages/FAQs'
import Dashboard from './pages/Dashboard';
import Regions from "./pages/locations/Regions";
import Provinces from "./pages/locations/Provinces";
import Cities from "./pages/locations/Cities";
import Barangays from "./pages/locations/Barangays";

function App() {
  // const currentURI = window.location.href.split('/').at(-1);
  const currentURI = useLocation().pathname;

  const inAuth = currentURI == "/login" || currentURI == "/signup";
  const { user } = useAuthContext();

  return (
    <div className="grid grid-rows-12 h-screen">
        {inAuth ? (
          <></>
        ) : (
          <div className="row-span-1">
            <Header />
          </div>
        )}

        <div
          className={
            inAuth
              ? "row-span-12 min-w-0"
              : "overflow-y-auto row-span-11 bg-gray-100"
          }
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/faqs' element={<FAQs />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path="/signup" element={!user ? <Register /> : <Navigate to="/" replace={true} />} />
            <Route path="/profile" element={user? <Profile /> : <Navigate to={"/login"} />} />
            <Route path="/locations/regions" element={<Regions />} />
            <Route path="/locations/provinces" element={<Provinces />} />
            <Route path="/locations/cities" element={<Cities />} />
            <Route path="/locations/barangays" element={<Barangays />} />
          </Routes>
        </div>

    </div>
  );
}

export default App;
