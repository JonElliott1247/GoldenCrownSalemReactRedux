export const NavActions = {
    SELECT_OPTION: 'SELECT_OPTION',
    CLEAR: 'CLEAR'
}

export const navButtonIds = {ORDER_ONLINE: 'nav-order-online',CALL: 'nav-call',SIGN_IN: 'nav-sign-in',
                            GPS: 'nav-gps',CART: 'nav-cart',ETC: 'nav-hamburger-menu'};

//action creator
export const clickNavigationButton = (id) => {

    let action;
    Object.values(navButtonIds).includes(id) ? action = {type: NavActions.SELECT_OPTION, id} : action = {type: NavActions.CLEAR}
    return action;
}

