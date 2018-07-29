import React from 'react';
import {List, Segment, Divider, Table, Button} from 'semantic-ui-react';

const Hours = () => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Days</Table.HeaderCell>
                <Table.HeaderCell>Open</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell>Monday - Thursday</Table.Cell>
                <Table.Cell>11AM - 9PM</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Friday - Saturday</Table.Cell>
                <Table.Cell>11AM - 10PM</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Sunday</Table.Cell>
                <Table.Cell>12PM - 9PM</Table.Cell>
            </Table.Row>
        </Table.Body>

    </Table>


)

/*
<List bulleted style={{fontSize: '16px'}}>
                    <List.Item>Monday - Thursday: 11AM - 9PM</List.Item>
                    <List.Item>Friday - Saturday: 11AM - 10PM</List.Item>
                    <List.Item>Sunday: 12PM - 9PM</List.Item>
                </List>
*/


const HamburgerMenuExpanded = () => (
    <Segment raised style={{margin: '0px', fontSize: '20px'}}>
    <List verticalAlign='middle' style={{ padding: '10px', fontFamily: 'courier'}}>
        <List.Item style={{marginBottom: '20px'}}>
            <List.Icon name='clock' />
            <List.Content>
                <List.Header>Hours</List.Header>
                <Hours />
            </List.Content>
        </List.Item>
        <Divider style={{marginBottom: '20px'}}/>
        <List.Item>
            <List.Icon name='user' />
                <List.Content>
                    <List.Header>My Account</List.Header>
                    <List style={{fontSize: '16 px'}}>
                        <List.Item><Button primary>Sign In</Button></List.Item>
                        <List.Item><Button disabled>Update information</Button></List.Item>
                    </List>
                </List.Content>
        </List.Item>

        
    </List>
    </Segment>

)


export default HamburgerMenuExpanded;