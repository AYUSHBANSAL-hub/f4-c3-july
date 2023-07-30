import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
function App() {
  const [isloggedIn,setLoginStatus]=useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={isloggedIn?<Navigate to='/profile'/>:<LoginPage setLoginStatus={setLoginStatus}/>}></Route>
        <Route path="/profile" element={isloggedIn?<ProfilePage/>:<Navigate to='/login'/>}></Route>
        <Route path="*" element={<Navigate to='/login'/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
