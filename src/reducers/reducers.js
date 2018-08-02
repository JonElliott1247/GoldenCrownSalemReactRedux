const defaultState = {
    navSelected: 'hi',
    cart: [],
    user: {signedIn: false, userName: undefined}
}

function navReducer(state, action) {
    
}

function dummyReducer(state = defaultState, action) {
    return state;
}

export default dummyReducer;
