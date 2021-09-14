import './App.css';
import Home from "./Home"
import React from "react";
import {Router, Links} from 'react-router-dom'
function App() {
  return (
      <div className={App}>
      <Router to={"/"} component={Home}></Router>
      </div>
  );
}

export default App;
