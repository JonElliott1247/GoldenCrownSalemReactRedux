export const NavActions = {CLICK_LOGO: 'CLICK_LOGO',
CLICK_ORDER_BUTTON: 'CLICK_ORDER_NOW',
CLICK_CALL_BUTTON : 'CLICK_CALL_NOW',
CLICK_SIGN_IN: 'CLICK_SIGN_IN',
CLICK_CART: 'CLICK_CART',
CLICK_HAMBURGER_MENU: 'CLICK_HAMBURGER_MENU',
CLEAR: 'CLEAR'
}

//action creator
export const clickNavigationButton = (id) => {
    switch(id)
    {
        case 'nav-logo': 
            return NavActions.CLICK_LOGO
        case 'nav-order-online':
            return NavActions.CLICK_ORDER_BUTTON
        case 'nav-sign-in':
            return NavActions.CLICK_SIGN_IN
        case 'nav-cart':
            return NavActions.CLICK_CART
        case 'nav-hamburger-menu':
            return NavActions.CLICK_HAMBURGER_MENU
        case '':
            return NavActions.CLEAR;
        default:
            return NavActions.Clear;
    }

}

