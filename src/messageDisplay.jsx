import React from "react";

const MessageDisplay = ({ gameStatus }) => {
    let message = "Game in Progress..."; // Default message

    if (gameStatus === "LOST") {
        message = "LOSERRRRR YOU LOST!";
    } else if (gameStatus === "WON") {
        message = "CONGRATS YOU WIN!";
    } else if (gameStatus === "DRAW") {
        message = "You both lost!";
    }

    return <h1>{message}</h1>;
};

export default MessageDisplay;
