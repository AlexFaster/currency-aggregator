import React from "react";

const ControlComponent = (
    {
        calculateMoney
    }
) => {
    return (
        <div>
            <button onClick={calculateMoney}>Calculate</button>
        </div>
    );
};

export default ControlComponent;
