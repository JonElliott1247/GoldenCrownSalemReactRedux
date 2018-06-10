import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

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
        const location = (
            <Menu.Item>
                <Icon size='large' name='location arrow' color='blue'></Icon>
                <span>Location</span>
            </Menu.Item>
        );

        const desktopRight = (
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
        );

        const mobileRight = (
                <Menu.Menu position='right'>
                <Menu.Item>
                    <a href='tel:555-555-5555'>
                        <Icon size='large' name='call square'/>
                    </a>
                </Menu.Item>
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
                <Menu.Item>
                    <Icon size='large' name='food' color='green'></Icon>
                    <span>Order Online</span>
                </Menu.Item>
                {width > 839 ? location :''}
                {width > 839 ? desktopRight : mobileRight}

            </Menu>
        )
    }
    

}

export default NavBar;