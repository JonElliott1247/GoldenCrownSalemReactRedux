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
import {navButtonIds} from '../../actions/navigation'

class HamburgerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    Menu = () => (
        <Modal trigger={this.unExpandedMenu()} closeIcon centered={false}>
            <HamburgerMenuExpanded />
        </Modal>
    )

    unExpandedMenu = () => {
    const id = navButtonIds.ETC;
    const {onClick} = this.props;    
    return ( 
        <Menu.Item id={id} onClick={() => onClick(id)} link>
            <Icon name='bars' size='large' onClick={() => this.setState({expanded : true}) } />
        </Menu.Item>

    )
}

    render() {
        const {expanded} = this.state;
        return this.Menu();
        //return expanded ? this.expandedMenu() : this.unExpandedMenu() ;
    }


}

export default HamburgerMenu;
