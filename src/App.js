import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Users from "./Components/Users";
import Home from "./Components/Home";
import About from "./Components/About";
import Alert from "./Components/Alert";
// import { useContext } from "react";
import NoteState from "./Context/notes/NoteState.js";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Noteitem from "./Components/Noteitem";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert message="hey!!" /> */}
          {/* <Noteitem/> */}
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
