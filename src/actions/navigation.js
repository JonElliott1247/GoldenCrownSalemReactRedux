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
            return {type: NavActions.CLICK_LOGO, id}
        case 'nav-order-online':
            return {type: NavActions.CLICK_ORDER_BUTTON, id}
        case 'nav-call':
            return {type: NavActions.CLICK_CALL_BUTTON, id}
        case 'nav-sign-in':
            return {type: NavActions.CLICK_SIGN_IN, id}
        case 'nav-gps':
            return {type: NavActions.CLICK_GPS, id}
        case 'nav-cart':
            return {type: NavActions.CLICK_CART, id}
        case 'nav-hamburger-menu':
            return {type: NavActions.CLICK_HAMBURGER_MENU, id}
        case '':
        default:
            return {type: NavActions.CLEAR};
    }

}

