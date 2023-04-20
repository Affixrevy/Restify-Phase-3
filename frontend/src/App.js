import './App.css';
import {Route, Routes} from "react-router-dom";
import { default as Landing } from "./pages/Landing.js"
import { default as Login } from "./pages/Login.js"
import { default as Signup } from "./pages/Signup.js"
import { default as Profile } from "./pages/Profile.js"
import { default as EditProfile } from "./pages/EditProfile.js"
import { default as Property } from "./pages/Property.js"
import { default as ModifyProperty } from "./pages/ModifyProperty.js";
import { default as ManageProperty } from "./pages/ManageProperty.js";
import { default as Listing } from "./pages/Listing.js"
import { default as ListingAddition } from "./pages/ListingAddition.js";
import { default as ViewGuest } from "./pages/ViewGuest.js";
import { default as Test } from "./pages/Test.js";


function App() {
    return (
      <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/property/:id" element={<Property />}/>
          <Route path="/edit-profile/:id" element={<EditProfile />}/>
          <Route path="/modify-property" element={<ModifyProperty />}/>
          <Route path="/manage-property/:id" element={<ManageProperty />}/>
          <Route path="/view-guest/:id" element={<ViewGuest />}/>
          <Route path="/listing" element={<Listing />}/>
          <Route path="/listing-addition" element={<ListingAddition />}/>
          {/*TODO: This route is a test route for me pls remove whenever we're done*/}
          <Route path="/test" element={<Test />}/>
      </Routes>
    );
}

export default App;
