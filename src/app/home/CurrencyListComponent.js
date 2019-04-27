import React from "react";
import CurrencyItemComponent from "./CurrencyItemComponent";


const CurrencyListComponent = (
    {
        currencies
    }
) => (
    <div>
        {
            currencies.map(
                currency => (
                    <CurrencyItemComponent key={currency.uuid} currency={currency}/>
                )
            )
        }
    </div>
);

export default CurrencyListComponent;
