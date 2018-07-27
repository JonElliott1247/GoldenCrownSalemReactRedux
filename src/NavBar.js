import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

const OrderOnline = ({width}) => {
    return (
    <Menu.Item link>
        <div>
            <Icon size='large' name='food' color='green'></Icon>
            {width > 750 ? <span style={{color: '#303030', fontWeight: 'bold', fontSize: '12px'}}>Order Online</span> 
            : <span><h1 style={{fontSize: '11px'}}>ORDER</h1></span>}
        </div>
    </Menu.Item>
    )
} 

const CallNow = ({width}) => {
    return (
        <Menu.Item link>
                <div>
                    <Icon size='large' name='call square' color='blue'/>
                    {width > 750 ? <span style={{color: '#303030', fontWeight: 'bold', fontSize: '12px'}}>(555) 555-5555</span>
                     : <span><h1 style={{fontSize: '11px'}}>CALL</h1></span>}
                </div>
        </Menu.Item>
    )
}

const Location = ({width}) => (
        <Menu.Item link>
            <div>
               <Icon size='large' name='location arrow' color='red'></Icon>
                {
                    width > 839 ? <span>Location</span> : <span><h1 style={{fontSize: '11px'}}>GPS</h1></span>
                }
            </div>
        </Menu.Item>
)

const SignIn = ({width}) => {
    return (
        <Menu.Item link>
            {
                width > 600 ? <Button primary size='mini'>Sign in to Order</Button>
                : <div><Icon size='large' name='user'/><span><h1 style={{fontSize: '11px'}}>LOG IN</h1></span></div>
            }
        </Menu.Item>
    )
}

const Cart = () => (
    <Menu.Item link>
        {/*<Icon size='large' name='shopping cart' color='grey'></Icon>*/}
        <img src='http://getdrawings.com/images/chinese-food-drawing-5.png' width='80' height='auto' />
    </Menu.Item> 
)

const HamburgerMenu = () => (
    <Menu.Item link>
        <Icon name='bars' size='large'/>            
    </Menu.Item>
)

const Navigation = ({width}) => (
    <Menu.Menu position='right'>
        {width <= 600 ? <Location width={width}/> : ''}
        {width > 540 ? <SignIn width={width}/> : ''}
        {width > 428 ? <Cart /> : ''}
        <HamburgerMenu />
    </Menu.Menu>
)

const Logo = ({width}) => (
    <Menu.Item header>
        <Icon size='large' name='chess queen' color='yellow'></Icon>
        {width > 480 ? <div><div>Golden Crown</div> <div style={{fontSize: '10px', fontWeight: '100'}}> Salem, OR.</div></div> 
        : width > 340 ? <div><div>GC</div> <div style={{fontSize: '9px', fontWeight: '400'}}> Salem, OR.</div></div>  : ''}
    </Menu.Item>
)

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: document.documentElement.clientWidth};
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

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }


    render() {
        const {width} = this.state;
        const styles = {  display: 'flex', justifyContent: 'space-between'}

        return (
            <Menu style={{margin: '0px'}}>
                <Logo width={width}/>
                <OrderOnline width={width}/>
                <CallNow width = {width} />
                <Navigation width={width} />
            </Menu>
        )
    }
    
}

export default NavBar;