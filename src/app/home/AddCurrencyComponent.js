import React from "react";

const AddCurrencyComponent = (
    {
        addCurrency
    }
) => {
    return (
        <div>
            <select name="currency_select_add" id="currency_select_add">
                <option>USD</option>
                <option>EUR</option>
                <option>UAH</option>
            </select>
            <input type='text' id='currency_input_add'/>
            <button onClick={addCurrency}>Add Currency</button>
        </div>
    );
};

export default AddCurrencyComponent;
