import {connect} from 'react-redux';
import NavBar from './NavBar';

//flesh these out later
const mapStateToProps = (state, ownProps) => {};
const mapDispatchToProps = dispatch => (dispatch('FAKE_ACTION'));

const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavigationContainer;