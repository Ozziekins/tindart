import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route}  from 'react-router-dom'
import Home from "./Home";
import Feed from "./Feed";
import Login from "./Login";
import Swipe from "./Swipe";
import Auction from "./Auction";

ReactDOM.render(

    <Router>
        <div>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/swipe">
                <Swipe />
            </Route>
            <Route exact path="/auction">
                <Auction />
            </Route>
        </div>
    </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
