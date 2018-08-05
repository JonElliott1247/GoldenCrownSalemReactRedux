import {connect} from 'react-redux';
import Category from '../components/Category';

fetch("http://localhost:51099/api/categories").then((response) => response.json()).then( (response) => console.log(response));

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