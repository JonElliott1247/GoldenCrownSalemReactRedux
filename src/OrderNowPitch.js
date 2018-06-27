import React from 'react';
import {Segment, Header, Button, Icon, Step} from 'semantic-ui-react';

const steps =   [
{
    key: 'menu',
    icon: 'triangle right',
    title: 'Start Order'
},
{
    key: 'billing',
    icon: 'payment',
    title: 'Billing',
    description: 'Enter billing information'
},
{
    key: 'confirm',
    disabled: true,
    icon: 'info',
    title: 'Confirm Order'
}
];

const OrderNowPitch = () => {

    return <Step.Group items={steps}  size='mini'/>


    /*
    return (
        <Segment raised>
            <div className="order-pitch">
                <h3 className='pitch-slogan'>Start your order</h3>
                <Button>Delivery</Button>
                <Button>Take Out</Button>
            </div>
        </Segment>
    );
    */

}

export default OrderNowPitch;