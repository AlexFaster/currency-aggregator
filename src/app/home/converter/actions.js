import {ADD_CURRENCY, CALCULATION_SUCCESS, CHANGE_AMOUNT, RESET_CALCULATION, SWITCH_RESULT_CURRENCY} from "./types";

export const switchCurrency = (event) => {
    return {
        type: SWITCH_RESULT_CURRENCY,
        value: event.target.value
    }
};

export const changeInput = (event) => {
    return {
        type: CHANGE_AMOUNT,
        value: event.target.value,
        index: parseInt(event.target.name)
    }
};

export const calculateMoney = () => {
    return (dispatch, getState) => {
        dispatch(resetCalculation());
        const {currencies, resultCurrency} = getState().currenciesState;
        currencies.map(currency => {
            fetch(`https://free.currconv.com/api/v7/convert?q=${currency.name}_${resultCurrency}&apiKey=7711ef7f1eaf08971bd5`)
                .then(
                    response => response.json(),
                    // Do not use catch, because that will also catch
                    // any errors in the dispatch and resulting render,
                    // causing a loop of 'Unexpected batch number' errors.
                    // https://github.com/facebook/react/issues/6895
                    error => console.log('An error occurred.', error)
                )
                .then(json => {
                        const resultCombo = `${currency.name}_${resultCurrency}`;
                        const amount = parseFloat(json.results[resultCombo].val) * currency.amount;
                        dispatch(calculateMoneySuccess(amount))
                        // We can dispatch many times!
                        // Here, we update the app state with the results of the API call.
                    }
                    // dispatch(receivePosts(subreddit, json))
                )
        })
    };
};

const calculateMoneySuccess = (amount) => {
    return {
        type: CALCULATION_SUCCESS,
        amount
    }
};

const resetCalculation = () => {
    return {
        type: RESET_CALCULATION,
    }
};

export const addCurrency = (currency) => {
    console.log('addCurrency invoked');
    return {
        type: ADD_CURRENCY,
        currency
    }
};
