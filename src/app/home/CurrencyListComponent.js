import React from "react";
import CurrencyItemComponent from "./CurrencyItemComponent";


const CurrencyListComponent = (
    {
        currencies,
        changeInput
    }
) => (
    <div>
        {
            currencies.map(
                (currency, index) => (
                    <CurrencyItemComponent key={index} index={index} currency={currency} changeInput={changeInput}/>
                )
            )
        }
    </div>
);

export default CurrencyListComponent;
