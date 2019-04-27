import React from "react";
import CurrencyListComponent from "./CurrencyListComponent";
import ControlComponent from "./ControlComponent";
import ResultCurrencySelectComponent from "./ResultCurrencySelecyComponent";

const HomeComponent = (
    {
        currencies,
        switchCurrency,
        resultCurrency
    }
) => (
    <div>
        <CurrencyListComponent currencies={currencies}/>
        <ControlComponent/>
        <ResultCurrencySelectComponent switchCurrency={switchCurrency} selectValue={resultCurrency}/>
    </div>
);

export default HomeComponent;
