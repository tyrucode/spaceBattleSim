import React from "react";

const RestartButton = ({ setPlayerHealth, setEnemyHealth, setGameStatus }) => {
    const handleRestart = () => {
        setPlayerHealth(100);
        setEnemyHealth(100);
        setGameStatus("ACTIVE");
    }
    return (
        <button onClick={handleRestart}>Restart!</button>
    );
};

export default RestartButton;
