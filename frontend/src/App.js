import './App.css';
import {Route, Routes} from "react-router-dom";
import { default as Landing } from "./pages/Landing.js"
import { default as Login } from "./pages/Login.js"
import { default as Signup } from "./pages/Signup.js"
import { default as Profile } from "./pages/Profile.js"
import { default as EditProfile } from "./pages/EditProfile.js"
import { default as Property } from "./pages/Property.js"
import { default as ModifyProperty } from "./pages/ModifyProperty";
import { default as Listing } from "./pages/Listing.js"
import { default as Reservation } from "./pages/Reservation.js"
import { default as Test } from "./pages/Test.js"

function App() {
    return (
      <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/property/:id" element={<Property />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/edit-profile" element={<EditProfile />}/>
          <Route path="/modify-property" element={<ModifyProperty />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="/test" element={<Test />}/>
      </Routes>
    );
}

export default App;
