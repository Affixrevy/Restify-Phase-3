import './App.css';
import {Route, Routes} from "react-router-dom";
import { default as Landing } from "./pages/Landing.js"
import { default as Login } from "./pages/Login.js"
import { default as Signup } from "./pages/Signup.js"
import { default as Profile } from "./pages/Profile.js"
import { default as Property } from "./pages/Property.js"
import { default as Reservation } from "./pages/Reservation.js"
import {default as Listing } from "./pages/Listing.js"

function App() {
    return (
      <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/property" element={<Property />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/listing" element={<Listing />}/>
      </Routes>
    );
}

export default App;
