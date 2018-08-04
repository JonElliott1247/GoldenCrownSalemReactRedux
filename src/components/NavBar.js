import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';
import HamburgerMenu from './hamburgerMenu/HamburgerMenu';
import {navButtonIds} from '../actions/navigation';

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
        {width > 540 ? <SignIn width={width} onClick={onClick} navSelected={navSelected} /> : ''}
        {width > 428 ? <Cart onClick={onClick} navSelected={navSelected} /> : ''}
        <HamburgerMenu onClick={onClick} />
    </Menu.Menu>
)

const Logo = ({width, onClick}) => {
    const id = navButtonIds.HOME;
    return (
            <Menu.Item id={id} header onClick={() => onClick(id)}>
                <Icon size='large' name='chess queen' color='yellow'></Icon>
                {width > 480 ? <div><div>Golden Crown</div> <div style={{fontSize: '10px', fontWeight: '100'}}> Salem, OR.</div></div> 
                : width > 340 ? <div><div>GC</div> <div style={{fontSize: '9px', fontWeight: '400'}}> Salem, OR.</div></div>  : ''}
            </Menu.Item>
    )
}

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: document.documentElement.clientWidth, active: ""};
        this.updateWidth = this.updateWidth.bind(this);
    }

    updateWidth() {
        const width = document.documentElement.clientWidth;
        this.setState({width});
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }


    render() {
        const {width} = this.state;
        const {onClick, navSelected} = this.props;
        console.log(navSelected)
        return (
            <Menu>
                <Logo width={width} onClick={onClick} />
                <OrderOnline width={width} onClick={onClick} navSelected={navSelected}/>
                <CallNow width = {width}  onClick={onClick} navSelected={navSelected}/>
                <RightSide width={width} onClick={onClick} navSelected={navSelected}/>
            </Menu>
        )
    }
    
}

export default NavBar;