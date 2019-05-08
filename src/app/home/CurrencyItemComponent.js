import React from "react";

const CurrencyItemComponent = (
    {
        currency,
        index,
        changeInput
    }
) => (
    <div>
        {currency.name} <input type='integer' name={index} value={currency.amount} onChange={changeInput}/>
    </div>
);

export default CurrencyItemComponent;
