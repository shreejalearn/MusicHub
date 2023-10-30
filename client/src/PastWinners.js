import React, { useState, useEffect } from 'react';
import axios from 'axios';
import winner from './assets/winner.png';
import guitarguy from './assets/guitarguy.png';
import trophyguy from './assets/trophyguy.png';
import sparkle from './assets/sparkle.png';

const PastWinners = () => {
  const [albumCoverChallengeWinners, setAlbumCoverChallengeWinners] = useState([]);
  const [coverChallengeWinners, setCoverChallengeWinners] = useState([]);
  const [lyricsChallengeWinners, setLyricsChallengeWinners] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:5000/pastwinnersac')
      .then(response => {
        setAlbumCoverChallengeWinners(response.data.pastWinners);
      })
      .catch(error => {
        console.error(error);
      });
    axios.post('http://localhost:5000/pastwinnerscc')
      .then(response => {
        setCoverChallengeWinners(response.data.pastWinners);
      })
      .catch(error => {
        console.error(error);
      });
// 
    axios.post('http://localhost:5000/pastwinnerslc')
      .then(response => {
        setLyricsChallengeWinners(response.data.pastWinners);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-yellow2-resonate min-h-screen flex flex-col items-center relative overflow-y-hidden">
      <img src={winner} alt="winner banner" className="w-[70%]" />
      <img src={guitarguy} alt="guitar guy design" className="w-[30%] mr-[-65%] mt-[-15%]" />
      <img src={trophyguy} alt="trophy guy design" className="w-[30%] ml-[-75%] mt-[-40%]" />

      <div className="justify-center text-center align-middle font-CG_Reg max-w-[800px] overflow-hidden text-3xl text-black-resonate mt-[-25%]">
        <div>
          <p className="mb-4 font-bold text-xl">Album Cover Design Challenge Winners:</p>
          {albumCoverChallengeWinners.map((winner, index) => (
            <p key={index}>{winner.name} ({winner.year})</p>
          ))}
        </div>
        <div className="mt-8">
          <p className="mb-4 font-bold text-xl">Cover Challenge Winners:</p>
          {coverChallengeWinners.map((winner, index) => (
            <p key={index}>{winner.name} ({winner.year})</p>
          ))}
        </div>
        <div className="mt-8 mb-[20%]">
          <p className="mb-4 font-bold text-xl">Lyrics Challenge Winners:</p>
          {lyricsChallengeWinners.map((winner, index) => (
            <p key={index}>{winner.name} ({winner.year})</p>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PastWinners;
