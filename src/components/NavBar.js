import React from 'react';
import {Menu, Button, Icon, Sticky} from 'semantic-ui-react';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import {navButtonIds} from '../actions/navigation';

const Logo = ({width, onClick}) => {
    const id = navButtonIds.HOME;
    return (
            <Menu.Item id={id} header onClick={() => onClick(id)}>
                <Icon size='large' name='chess queen' color='yellow'></Icon>
                {width > 580 ? <div><div>Golden Crown</div> <div style={{fontSize: '10px', fontWeight: '100'}}> Salem, OR.</div></div> 
                : width > 360 ? <div><div>GC</div> <div style={{fontSize: '9px', fontWeight: '400'}}> Salem, OR.</div></div>  : ''}
            </Menu.Item>
    )
}

const OrderOnline = ({width, onClick, navSelected}) => {
    const id = navButtonIds.ORDER_ONLINE;
    console.log(navSelected);

    return (
    <Menu.Item id={id} onClick={() => onClick(id)} active={id===navSelected} link>
        <div>
            <Icon size='large' name='food' color='green'></Icon>
            {width > 750 ? <span style={{color: '#303030', fontWeight: 'bold', fontSize: '12px'}}>Order Online</span> 
            : <span><h1 style={{fontSize: '11px'}}>ORDER</h1></span>}
        </div>
    </Menu.Item>
    )
} 

const CallNow = ({width, onClick, navSelected}) => {
    const id = navButtonIds.CALL;
    return (
        <Menu.Item id={id} onClick={() => onClick(id)} active={id===navSelected} link>
                <div>
                    <Icon size='large' name='call square' color='blue'/>
                    {width > 750 ? <span style={{color: '#303030', fontWeight: 'bold', fontSize: '12px'}}>(503) 362-9560</span>
                     : <span><h1 style={{fontSize: '11px'}}>CALL</h1></span>}
                </div>
        </Menu.Item>
    )
}

const Location = ({width, onClick, navSelected}) => {
    const id = navButtonIds.GPS;
    return (
        <Menu.Item id={id} onClick={() => onClick(id)} active={id===navSelected} link>
            <div>
                <Icon size='large' name='location arrow' color='red'></Icon>
                {
                    width > 839 ? <span>Location</span> : <span><h1 style={{fontSize: '11px'}}>GPS</h1></span>
                }
            </div>
        </Menu.Item>
    )
}

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

const Cart = ({onClick, navSelected}) => {
    const id = navButtonIds.CART;
    return (
        <Menu.Item id={id} onClick={() => onClick(id)} active={id === navSelected} link>
            {/*<Icon size='large' name='shopping cart' color='grey'></Icon>*/}
            <img src='http://getdrawings.com/images/chinese-food-drawing-5.png' width='80' height='auto' />
        </Menu.Item> 
    )
}

const RightSide = ({width, onClick, navSelected}) => (
    <Menu.Menu position='right'>
        {width <= 600 ? <Location width={width} onClick={onClick} navSelected={navSelected} /> : ''}
        {width > 495 ? <SignIn width={width} onClick={onClick} navSelected={navSelected} /> : ''}
        {width > 428 ? <Cart onClick={onClick} navSelected={navSelected} /> : ''}
        <HamburgerMenu onClick={onClick} />
    </Menu.Menu>
)


const NavBar = ({width, onClick, navSelected}) => {

        console.log(navSelected)
        return (
            <Menu style={{position: 'sticky', top:'0px', zIndex: '2', gridColumn: '1 / -1', gridRow: '1 / span 1'}}>
                <Logo width={width} onClick={onClick} />
                <OrderOnline width={width} onClick={onClick} navSelected={navSelected}/>
                <CallNow width = {width}  onClick={onClick} navSelected={navSelected}/>
                <RightSide width={width} onClick={onClick} navSelected={navSelected}/>
            </Menu>
        )
    }


export default NavBar;