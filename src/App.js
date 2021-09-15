import './App.css';
import Home from "./Home"
import Feed from "./Feed"
import React from "react";
import {Router, Links} from 'react-router-dom'
function App() {
  return (
      <div className={App}>
          <Router to={"/"} component={Home}></Router>
          <Router to={"/feed"} component={Feed}></Router>
      </div>
  );
}

export default App;
