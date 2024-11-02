import React, { useState } from "react";
import FireButton from "./firingButton";
import RestartButton from "./restartButton";
import MessageDisplay from "./messageDisplay";
import './index.css'

function GameComponent() {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [gameStatus, setGameStatus] = useState("ACTIVE");

    return (
        <>
            <div className="health">
                <h2>Player Health - {playerHealth}</h2>
                <h2>Enemy Health - {enemyHealth}</h2>
            </div>
            <div className="GameStatus">
                <h2>Game Status: {gameStatus}</h2>
            </div>
            <div className="button-container">
                <FireButton
                    playerHealth={playerHealth}
                    enemyHealth={enemyHealth}
                    setEnemyHealth={setEnemyHealth}
                    setPlayerHealth={setPlayerHealth}
                    setGameStatus={setGameStatus}
                    className="fireButton"

                />
                <RestartButton
                    setPlayerHealth={setPlayerHealth}
                    setEnemyHealth={setEnemyHealth}
                    setGameStatus={setGameStatus}
                    className="restartButton"
                />
            </div>
            <MessageDisplay gameStatus={gameStatus} />
        </>
    );
}

export default GameComponent;
