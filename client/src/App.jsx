import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./pages/components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import Regions from "./pages/locations/Region";
import Provinces from "./pages/locations/Province";
import Citys from "./pages/locations/City";
import Barangays from "./pages/locations/Barangay";

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
            <Route path="/locations/regions" element={<Regions />} />
            <Route path="/locations/provinces" element={<Provinces />} />
            <Route path="/locations/cities" element={<Citys />} />
            <Route path="/locations/barangays" element={<Barangays />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
