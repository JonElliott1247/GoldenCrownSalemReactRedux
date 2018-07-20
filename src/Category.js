import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

const Category = ({id, label, description, path, imagePath}) => (
    <Card>
        <Image src={imagePath} size="large" />
        <Card.Content>
            <Card.Header>{label}</Card.Header>
        </Card.Content>
    </Card>
)

export default Category;