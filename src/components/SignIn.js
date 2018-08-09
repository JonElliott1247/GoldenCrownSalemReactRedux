import {navButtonIds} from '../actions/navigation';
import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

const SignIn = ({width, onClick, navSelected}) => {
    const id = navButtonIds.SIGN_IN;

    return (
        <Menu.Item id={id} onClick={() => onClick(id)} active={id === navSelected} link>
            {
                width > 600 ? <Button primary size='mini'>Sign in to Order</Button>
                : <div><Icon size='large' name='user'/><span><h1 style={{fontSize: '11px'}}>LOG IN</h1></span></div>
            }
        </Menu.Item>
    )
}

export default SignIn;