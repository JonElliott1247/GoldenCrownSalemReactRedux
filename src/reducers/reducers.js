import {NavActions} from '../actions/navigation'


const defaultState = {
    navSelected: 'nav-order-online',
    cart: [],
    user: {signedIn: false, userName: undefined}
}

function navReducer(state, action) {
    console.log(`${action.type} : ${action.id}`);
    
    switch(action.type)
    {
        case NavActions.SELECT_OPTION:
            return action.id;
        
        case NavActions.CLEAR:
            return undefined;
        
        default:
            return state;
    }
}

function reducer(state = defaultState, action) {
    if(Object.values(NavActions).includes(action.type))
    {
        console.log(`previous state: ${state.navSelected}`)
        return {...state, navSelected: navReducer(state.NavSelected, action)};
    }
    else
        return state
}

export default reducer;
