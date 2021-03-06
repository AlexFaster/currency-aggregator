import {ADD_CURRENCY, CALCULATION_SUCCESS, CHANGE_AMOUNT, RESET_CALCULATION, SWITCH_RESULT_CURRENCY} from "./types";

const INITIAL_STATE = {
    currencies: [
        {
            name: 'USD',
            amount: '1000'
        },
        {
            name: 'EUR',
            amount: '2000'
        },
    ],
    resultCurrency: 'USD',
    result: 0
};

const currencyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_RESULT_CURRENCY: {
            return {
                ...state,
                resultCurrency: action.value
            }
        }
        case ADD_CURRENCY: {
            return {
                ...state,
                currencies: [...state.currencies, action.currency]
            }
        }
        case CALCULATION_SUCCESS: {
            // debugger;
            return {
                ...state,
                result: state.result + action.amount
            }
        }
        case RESET_CALCULATION: {
            return {
                ...state,
                result: 0
            }
        }
        case CHANGE_AMOUNT: {
            return {
                ...state,
                currencies: state.currencies.map((currency, index) => {
                    if(index === action.index) {
                        currency.amount = action.value
                    }
                    return currency;
                })
            }
        }
        default:
            return state
    }
};

export default currencyReducer;
