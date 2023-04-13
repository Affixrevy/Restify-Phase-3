import './App.css';
import {Route, Routes} from "react-router-dom";
import { default as Landing } from "./pages/Landing.js"
import { default as Login } from "./pages/Login.js"
import { default as Signup } from "./pages/Signup.js"
import { default as Profile } from "./pages/Profile.js"
import { default as Property } from "./pages/Property.js"

function App() {
    return (
      <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/property" element={<Property />}/>
      </Routes>
    );
}

export default App;
