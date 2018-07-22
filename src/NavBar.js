import React from 'react';
import {Menu, Button, Icon, Header} from 'semantic-ui-react';

const OrderOnline = ({width}) => {
    return (
    <Menu.Item>
        <div>
            <Icon size='large' name='food' color='green'></Icon>
            {width > 750 ? <span>Order Online</span> : <span><h1 style={{fontSize: '12px'}}>ORDER</h1></span>}
        </div>
    </Menu.Item>
    )
} 

const CallNow = ({width}) => {
    return (
        <Menu.Item>
                <div>
                    <Icon size='large' name='call square' color='blue'/>
                    {width > 750 ? <span className='call-slogan'>(555) 555-5555</span> : <span><h1 style={{fontSize: '12px'}}>CALL</h1></span>}
                </div>
        </Menu.Item>
    )
}

const Location = ({width}) => (
        width > 300 ?
        <Menu.Item>
            <div>
               <Icon size='large' name='location arrow' color='red'></Icon>
                {width > 839 ? <span>Location</span> : <span><h1 style={{fontSize: '12px'}}>GPS</h1></span>}
            </div>
        </Menu.Item>
        :''
)

const SignIn = ({width}) => {
    return (
        <Menu.Item>
            {width > 600 ? 
                <Button primary size='mini'>Sign in to Order</Button> :
                <div><Icon size='large' name='user'/><span><h1 style={{fontSize: '12px'}}>LOG IN</h1></span></div>
            }
        </Menu.Item>
    )
}

const Cart = () => (
    <Menu.Item>
        {/*<Icon size='large' name='shopping cart' color='grey'></Icon>*/}
        <img src='http://getdrawings.com/images/chinese-food-drawing-5.png' width='80' height='auto' />
    </Menu.Item> 
)

const HamburgerMenu = () => (
    <Menu.Item>
        <Icon name='bars' size='large'/>            
    </Menu.Item>
)

const ExpandedNavigation = ({width}) => (
    <Menu.Menu>
        <OrderOnline width={width}/>
        <CallNow width={width}/>
        {width <= 600 ? <Location width={width}/> : ''}
        {width > 540 ? <SignIn width={width}/> : ''}
        <Cart />
        <HamburgerMenu />
    </Menu.Menu>
)

const CollapsedNavigation = ({width}) => (
    <Menu.Menu>
        <OrderOnline width={width}/>
        <CallNow width = {width} />
        <Location width={width}/>
        {width > 405 ? <Cart /> : ''}
        <HamburgerMenu />
    </Menu.Menu>
    
)

const Navigation = ({width}) => (
    width > 500 ? <ExpandedNavigation width={width} /> : <CollapsedNavigation width={width} />
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
        const styles = {  display: 'flex', justifyContent: 'center'}

        return (
            <div style={styles}>
            <Menu className='nav' >
                <Menu.Item header >
                    <Icon size='large' name='chess queen' color='yellow'></Icon>
                    <span>{width > 480 ? 'Golden Crown' : width > 360 ? 'GC' : ''}</span>
                </Menu.Item>
                <Navigation width={width} />

            </Menu>
            </div>
        )
    }
    
}

export default NavBar;