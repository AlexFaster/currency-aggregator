import {SWITCH_RESULT_CURRENCY} from "./types";

const INITIAL_STATE = {
    currencies: [
        {
            uuid: 'asdsadad',
            name: 'USD',
            amount: '1000'
        },
        {
            uuid: 'asdsasddad',
            name: 'EUR',
            amount: '2000'
        },
    ],
    resultCurrency: 'USD'
};

const currencyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SWITCH_RESULT_CURRENCY: {
            return {
                ...state,
                resultCurrency: action.value
            }
        }
    }
    return state;
};

export default currencyReducer;
