import React from 'react';
import {Card, Segment, Button} from 'semantic-ui-react'

import Category from './Category';

const Categories = ({width}) => {

    const itemsPerRow = width > 825 ? 3 : width > 500 ? 2 : 1
    return (
    <div style={{display: 'grid', gridTemplateColumns: '10% 80% 10%'}}>
        <Segment style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridColumnStart: '2', gridColumnEnd: '3'}} attached='top' inverted>
            <span>Choose a category...</span><span><Button color='olive'>All menu items</Button></span>
        </Segment>
        <Segment style={{gridColumnStart: '2', gridColumnEnd: '3'}} attached='bottom' secondary>
        <Card.Group itemsPerRow={itemsPerRow} centered >
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
                    <Category imagePath="https://i.pinimg.com/736x/45/eb/8d/45eb8d3e6751832362b599539f3446e6--chinese-appetizers-best-appetizers.jpg" label="Appetizers" />
        </Card.Group>
        </Segment>
    </div>
    )
}

export default Categories