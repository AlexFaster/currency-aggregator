import React from "react";

const CurrencyItemComponent = (
    {
        currency
    }
) => (
    <div>
        {currency.name} <input type='integer' value={currency.amount} />
    </div>
);

export default CurrencyItemComponent;
