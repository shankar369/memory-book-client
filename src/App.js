import React, { useState } from "react";
// import "./App.css";
import Routing from "./Routing";
import darkMode from "./static/images/dark-mode.png";
import Navbar from "./components/Navbar/Navbar";
// const image = require("./static/images/dark-mode.png");

function App() {
  const [status, setStatus] = useState("on");
  const handleClick = () => {
    document.documentElement.classList.toggle("dark-mode");
    setStatus(status === "on" ? "off" : "on");
  };
  return (
    <>
      <Navbar title="Memory Book" />
      <div className="app">
        <div className="dark-mode-img" onClick={handleClick}>
          <img src={darkMode} alt="dark-mode-icon" />
          <div>{`Turn ${status}`}</div>
        </div>
        {/* <button
        className="dark-mode-button"
        onClick={handleClick}
      >{`dark-mode ${status}`}</button> */}
        <Routing />
      </div>
    </>
  );
}

export default App;
