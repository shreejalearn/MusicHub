import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
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



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/CoverChallenge" element={<CoverChallenge />} />
        <Route path="/LyricChallenge" element={<LyricChallenge />} />
        <Route path="/AlbumChallenge" element={<AlbumChallenge />} />
        <Route path="/PastWinners" element={<PastWinners />} />
        <Route path="/Chronicle" element={<Chronicle />} />
        <Route path="/Connect" element={<Connect />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
