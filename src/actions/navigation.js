export const NavActions = {
    CLICK_LOGO: 'CLICK_LOGO',
    CLICK_ORDER_BUTTON: 'CLICK_ORDER_NOW',
    CLICK_CALL_BUTTON : 'CLICK_CALL_NOW',
    CLICK_SIGN_IN: 'CLICK_SIGN_IN',
    CLICK_GPS: 'CLICK_GPS',
    CLICK_CART: 'CLICK_CART',
    CLICK_HAMBURGER_MENU: 'CLICK_HAMBURGER_MENU',
    CLEAR: 'CLEAR'
}

//action creator
export const clickNavigationButton = (id) => {
    switch(id)
    {
        case 'nav-logo': 
            return {type: NavActions.CLICK_LOGO}
        case 'nav-order-online':
            return {type: NavActions.CLICK_ORDER_BUTTON}
        case 'nav-sign-in':
            return {type: NavActions.CLICK_SIGN_IN}
        case 'nav-gps':
            return {type: NavActions.CLICK_GPS}
        case 'nav-cart':
            return {type: NavActions.CLICK_CART}
        case 'nav-hamburger-menu':
            return {type: NavActions.CLICK_HAMBURGER_MENU}
        case '':
        default:
            return {type: NavActions.CLEAR};
    }

}

