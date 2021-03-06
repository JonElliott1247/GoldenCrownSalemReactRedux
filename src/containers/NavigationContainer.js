import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import {clickNavigationButton} from '../actions/navigation'

const mapStateToProps = (state) => {
    return  {
                navSelected: state.navSelected
            }
}
const mapDispatchToProps = dispatch => {
    return  {
                onClick: (id) => dispatch(clickNavigationButton(id))
            }
}


const NavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);

export default NavigationContainer;