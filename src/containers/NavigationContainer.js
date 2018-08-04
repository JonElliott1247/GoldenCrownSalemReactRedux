import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {clickNavigationButton} from '../actions/navigation'

//flesh these out later
const mapStateToProps = (state) => {
    return  {
                active: state.navSelected
            }
}
const mapDispatchToProps = dispatch => {
    return  {
                onClick: (message) => alert(message)
            }
}
    //dispatch(clickNavigationButton(id))


const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavigationContainer;