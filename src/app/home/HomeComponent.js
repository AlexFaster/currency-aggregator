import React from "react";
import CurrencyListComponent from "./CurrencyListComponent";
import ControlComponent from "./ControlComponent";
import ResultCurrencySelectComponent from "./ResultCurrencySelecyComponent";
import ResultComponent from "./ResultComponent";
import AddCurrencyComponent from "./AddCurrencyComponent";

const HomeComponent = (
    {
        currencies,
        switchCurrency,
        resultCurrency,
        result,
        addCurrency,
        calculateMoney,
        changeInput
    }
) => (
    <div>
        <CurrencyListComponent currencies={currencies} changeInput={changeInput}/>
        <ControlComponent calculateMoney={calculateMoney}/>
        <ResultCurrencySelectComponent switchCurrency={switchCurrency} selectValue={resultCurrency}/>
        <ResultComponent result={result} resultCurrency={resultCurrency}/>
        <AddCurrencyComponent addCurrency={addCurrency}/>
    </div>
);

export default HomeComponent;
