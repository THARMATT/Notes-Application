import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";
import Users from "./Components/Users";
import Home from "./Components/Home";
import About from "./Components/About";
// import { useContext } from "react";
import NoteState from "./Context/notes/NoteState.js";
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          {<Navbar />}
          <Outlet />
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Users />} />
            <Route path="/" element={<About />} />
          </Routes></div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
