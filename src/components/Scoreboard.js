import '../style/Scoreboard.css'
import React, { useState, useEffect } from "react";

const Scoreboard = (props) => {

    const {score, bestScore, checkBestScore} = props;

    useEffect(() => {
        checkBestScore();
    })

    return (
        <div className="scoreboard-container">
            <div>Best Score: {bestScore}</div>
            <div>Score: {score}</div>
        </div>
    )
}

export default Scoreboard;