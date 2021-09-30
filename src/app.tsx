import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WelcomeHome from './pages/home/WelcomeHome'
import AuthorizedHome from './pages/home/AuthorizedHome'
import Feed from './pages/feed/Feed'
import Login from './components/login/Login'
import Swipe from './pages/swipe/Swipe'
import Profile from './pages/profile/Profile'
import Auction from './pages/auction/Auction'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/feed">
          <Feed />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/swipe">
          <Swipe />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/auction">
          <Auction />
        </Route>
        <Route path="/home">
          <AuthorizedHome />
        </Route>
        <Route path="/">
          <WelcomeHome />
        </Route>
        <Route>404</Route>
      </Switch>
    </Router>
  )
}

export default App
