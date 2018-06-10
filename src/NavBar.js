import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

const NavBar = () => {

    return (
                
                <Menu className='nav'>
                <Menu.Item header>
                    <Icon size='large' name='chess queen' color='yellow'></Icon>
                    <span>Golden Crown</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon size='large' name='food' color='green'></Icon>
                    <span>Order Online</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon size='large' name='location arrow' color='blue'></Icon>
                    <span>Location</span>
                </Menu.Item>
                
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon size='large' name='call square'/>
                        <span className='call-slogan'>(555) 555-5555</span>
                    </Menu.Item>
                    <Menu.Item>
                        <Button primary size='mini'>Sign in to Order</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Icon size='large' name='shopping cart' color='grey'></Icon>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
    )

}

export default NavBar;