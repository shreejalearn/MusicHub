import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Switch, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Challenges from './Challenges';
import Generate from './Generate';
import CoverChallenge from './CoverChallenge';
import LyricChallenge from './LyricChallenge';
import AlbumChallenge from './AlbumChallenge';
import PastWinners from './PastWinners';
import Chronicle from './Chronicle';
import Connect from './Connect';
import Songlyricgenerator from './songlyricgenerator';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import WelcomePage from './WelcomePage';
import Profile from './Profile';
import Lyrics from './Lyrics';
import BlogPostDetails from './BlogComponents/BlogPostDetails';
import MessageForum from './MessageForum';
import MessageList from './MessageList';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/CoverChallenge" element={<CoverChallenge />} />
        <Route path="/LyricChallenge" element={<LyricChallenge />} />
        <Route path="/AlbumChallenge" element={<AlbumChallenge />} />
        <Route path="/PastWinners" element={<PastWinners />} />
        <Route path="/Chronicle" element={<Chronicle />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/songlyricgenerator" element={<Songlyricgenerator />} />
        <Route path="/Lyrics" element={<Lyrics />} />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  
);

function Forum() {
  return (
    <div>
      <h1>Forum</h1>
      <MessageForum />
      <Outlet /> {/* This will render nested child routes */}
      <MessageList />
    </div>
  );
  }

reportWebVitals();
