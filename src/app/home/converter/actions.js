import {SWITCH_RESULT_CURRENCY} from "./types";

const switchCurrency = (event) => {
    return {
        type: SWITCH_RESULT_CURRENCY,
        value: event.target.value
    }
};

export default switchCurrency;
