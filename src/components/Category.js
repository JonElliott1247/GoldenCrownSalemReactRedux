import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const Category = ({id, label, description, path, imagePath}) => (

    <Card size>
        <Image src={imagePath} />
        <Card.Content>
            <Card.Header>{label}</Card.Header>
            <Card.Meta>Try our delicious appetizers!</Card.Meta>
            <Card.Description>{description}</Card.Description>
        </Card.Content>
    </Card>

)


export default Category;