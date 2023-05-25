import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import WelcomeHome from './pages/home/WelcomeHome';
import AuthorizedHome from './pages/home/AuthorizedHome';
import Feed from './pages/feed/Feed';
import Login from './components/login/Login';
import Swipe from './pages/swipe/Swipe';
import Profile from './pages/profile/Profile';
import Auction from './pages/auction/Auction';
import Search from './pages/search/Search';
import store from './store';

function App() {
  return (
    <StoreProvider store={store}>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<AuthorizedHome />} />
        <Route path="/" element={<WelcomeHome />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
