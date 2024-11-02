import React from "react";
const FireButton = ({ playerHealth, enemyHealth, setPlayerHealth, setEnemyHealth, setGameStatus }) => {
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
    return (
        <button onClick={handleFire}>FIRE!</button>
    );
};

export default FireButton;