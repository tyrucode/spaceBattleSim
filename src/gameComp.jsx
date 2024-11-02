import React, { useState } from "react";
import FireButton from "./firingButton";
import RestartButton from "./restartButton";
import MessageDisplay from "./messageDisplay";
import './index.css'

function GameComponent() {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [gameStatus, setGameStatus] = useState("ACTIVE");

    const handleFire = () => {
        // generating random damage for player and enemy
        const playerDamage = Math.floor(Math.random() * 10) + 1;
        const enemyDamage = Math.floor(Math.random() * 10) + 1;
        // updating health
        const newPlayerHealth = Math.max(playerHealth - playerDamage, 0);
        const newEnemyHealth = Math.max(enemyHealth - enemyDamage, 0);
        // setting health to new health
        setPlayerHealth(newPlayerHealth);
        setEnemyHealth(newEnemyHealth);
        // checking game status
        if (newPlayerHealth === 0 && newEnemyHealth === 0) {
            setGameStatus("DRAW");
        } else if (newEnemyHealth === 0) {
            setGameStatus("WON");
        } else if (newPlayerHealth === 0) {
            setGameStatus("LOST");
        }
    };

    const restart = () => {
        setPlayerHealth(100);
        setEnemyHealth(100);
        setGameStatus("ACTIVE");
    };


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
                <FireButton onFire={handleFire} className="fireButton" />
                <RestartButton onClick={restart} className="restartButton" />
            </div>
            <MessageDisplay gameStatus={gameStatus} />
        </>
    );
}

export default GameComponent;
