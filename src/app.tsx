import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import WelcomeHome from './pages/home/WelcomeHome'
import AuthorizedHome from './pages/home/AuthorizedHome'
import Feed from './pages/feed/Feed'
import Login from './components/login/Login'
import Swipe from './pages/swipe/Swipe'
import Profile from './pages/profile/Profile'
import Auction from './pages/auction/Auction'
import Search from './pages/search/Search'
import store from './store'

function App() {
  return (
    <StoreProvider store={store}>
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
          <Route path="/search">
            <Search />
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
    </StoreProvider>
  )
}

export default App
