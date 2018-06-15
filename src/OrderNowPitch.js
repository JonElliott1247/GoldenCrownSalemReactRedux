import React from 'react';
import {Segment, Header, Button, Icon} from 'semantic-ui-react';

const OrderNowPitch = () => {

    return (
        <Segment raised>
            <div className="order-pitch">
                <h3 className='pitch-slogan'>Start your order</h3>
                <Button>Delivery</Button>
                <Button>Take Out</Button>
            </div>
        </Segment>
    );


}

export default OrderNowPitch;