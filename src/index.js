import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import {
  BrowserRouter as Router,
  Routes, // instead of Switch
  Route
} from "react-router-dom";

import Home from "./components/Home.js"
import About from "./components/About.js"
import Login from "./components/Login.js"
import Messages from "./components/Messages.js"
import NavBar from "./components/NavBar.js"
import SignUp from "./components/SignUp.js"
import './index.css';






// Step 2. Change so router is coordinating what is displayed
ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/messages" element={<Messages />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

export default Home;