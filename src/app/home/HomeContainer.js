import HomeComponent from "./HomeComponent";
import {connect} from "react-redux";
import switchCurrency from "./converter/actions";

const mapStateToProps = (state) => {
    const {currencies} = state.currenciesState;
    console.log(currencies);
    return {
        currencies
    }
};

const mapDispatchToProps = (dispatch) => (
    {switchCurrency: (event) => dispatch(switchCurrency(event))
});

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
