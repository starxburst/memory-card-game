import './App.css';
import React, { useState, useEffect } from "react";
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Cardboard from './components/Cardboard';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0);
  }

  const checkBestScore = () => {
    if (score >= bestScore) {
      setBestScore(score);
    }
  }

  return (
    <div className="App">
      <div className='header-container'>
        <Header/>
        <Scoreboard
          score={score}
          bestScore={bestScore}
          checkBestScore={checkBestScore}/>
      </div>
      <div>
        <Cardboard 
          increaseScore={increaseScore}
          resetScore={resetScore}/>
      </div>
    </div>
  )
}

export default App;
