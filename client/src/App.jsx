import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./pages/components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import Region from "./pages/locations/Region";
import Province from "./pages/locations/Province";
import City from "./pages/locations/City";
import Barangay from "./pages/locations/Barangay";

function App() {
  const currentURI = window.location.href.split("/").at(-1);
  const inAuth = currentURI == "login" || currentURI == "signup";

  return (
    <div className="grid grid-rows-12 h-screen">
      <BrowserRouter>
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
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/locations/regions" element={<Region />} />
            <Route path="/locations/provinces" element={<Province />} />
            <Route path="/locations/cities" element={<City />} />
            <Route path="/locations/barangays" element={<Barangay />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
