import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

const OrderOnline = ({width}) => {
    return (
    <Menu.Item>
        <Icon size='large' name='food' color='green'></Icon>
        {width > 839 ? <span>Order Online</span> : ''}
    </Menu.Item>
    )
} 

const CallNow = ({width}) => {
    return (
        <Menu.Item>
            <a href='tel:555-555-5555'>
                <Icon size='large' name='call square'/>
                {width > 839 ? <span className='call-slogan'>(555) 555-5555</span> : ''}
            </a>
        </Menu.Item>
    )
}

const Location = ({width}) => {
    return (
        <Menu.Item>
            <Icon size='large' name='location arrow' color='blue'></Icon>
            {width > 839 ? <span>Location</span> : ''}
        </Menu.Item>
    )
}

const SignIn = ({width}) => {
    return (
        <Menu.Item>
            {width > 600 ? 
                <Button primary size='mini'>Sign in to Order</Button> :
                <Icon size='large' name='user'/>
            }
        </Menu.Item>
    )
}


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

        const desktopRight = (
            <Menu.Menu>
                <OrderOnline width={width}/>
                <Location width={width}/>
                <CallNow width={width}/>
                <SignIn width={width}/>

                <Menu.Item>
                    <Icon size='large' name='shopping cart' color='grey'></Icon>
                </Menu.Item>
            </Menu.Menu>
        );

        const mobileRight = (
            <Menu.Menu>

                <Menu.Item>
                    <Button primary size='mini'>Sign in to Order</Button>
                </Menu.Item>
                <Menu.Item>
                    <Icon size='large' name='shopping cart' color='grey'></Icon>
                </Menu.Item>
            </Menu.Menu>
        );

        return (
                
            <Menu className='nav'>
                <Menu.Item header>

                    <Icon size='large' name='chess queen' color='yellow'></Icon>
                    <span>Golden Crown</span>
                </Menu.Item>
                {width > 839 ? desktopRight : desktopRight}

            </Menu>
        )
    }
    

}

export default NavBar;