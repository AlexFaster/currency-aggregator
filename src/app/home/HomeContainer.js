import HomeComponent from "./HomeComponent";
import {connect} from "react-redux";
import {addCurrency, switchCurrency, calculateMoney, changeInput} from "./converter/actions";

const mapStateToProps = (state) => {
    const {currencies, resultCurrency, result} = state.currenciesState;
    return {
        currencies,
        resultCurrency,
        result
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        switchCurrency: (event) => dispatch(switchCurrency(event)),
        addCurrency: (currency) => dispatch(addCurrency(currency)),
        calculateMoney: (currencies) => dispatch(calculateMoney(currencies)),
        changeInput: (event) => dispatch(changeInput(event))
    }
);

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
