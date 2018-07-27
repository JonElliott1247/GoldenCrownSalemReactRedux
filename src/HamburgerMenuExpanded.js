import React from 'react';
import {List, Segment} from 'semantic-ui-react';

const HamburgerMenuExpanded = () => (
    <Segment raised style={{margin: '0px'}}>
    <List divided style={{display: 'inline-block', padding: '10px'}}>
        <List.Item>
            <List.Icon name='clock' />
            <List.Content>
                <List.Header>Hours</List.Header>
                <List bulleted style={{fontSize: '12px'}}>
                    <List.Item>Monday - Thursday: 11AM - 9PM</List.Item>
                    <List.Item>Friday - Saturday: 11AM - 10PM</List.Item>
                    <List.Item>Sunday: 12PM - 9PM</List.Item>
                </List>
            </List.Content>
        </List.Item>
        
        <List.Item>
            <List.Icon name='user' />
                <List.Content>
                    <List.Header>My Account</List.Header>
                    <List divided style={{fontSize: '12px'}}>
                        <List.Item>Sign In</List.Item>
                        <List.Item>Update information</List.Item>
                    </List>
                </List.Content>
        </List.Item>

        
    </List>
    </Segment>

)


export default HamburgerMenuExpanded;