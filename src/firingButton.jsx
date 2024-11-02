import React from "react";
const FireButton = ({ onFire }) => {
    return (
        <button onClick={onFire}>FIRE!</button>
    );
};

export default FireButton;