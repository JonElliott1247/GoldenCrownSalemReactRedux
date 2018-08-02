/*
const HamburgerMenu = () => (
    <Menu.Item link>
        <Icon name='bars' size='large'/>            
    </Menu.Item>
)
*/

import React from 'react';
import {Menu, Icon, Modal} from 'semantic-ui-react';
import HamburgerMenuExpanded from './HamburgerMenuExpanded';

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    expandedMenu = () => (
        <Modal trigger={this.unExpandedMenu()} closeIcon centered={false}>
            <HamburgerMenuExpanded />
        </Modal>
    )

    unExpandedMenu = () => ( 
        <Menu.Item onClick={this.props.onClick} link>
            <Icon name='bars' size='large' onClick={() => this.setState({expanded : true}) } />
        </Menu.Item>

    )

    render() {
        const {expanded} = this.state;
        return this.expandedMenu();
        //return expanded ? this.expandedMenu() : this.unExpandedMenu() ;
    }


}

export default HamburgerMenu;
