import React from 'react';
import {Card} from 'semantic-ui-react'

import Category from './Category';

const Categories = ({width}) => {

    const itemsPerRow = width > 825 ? 3 : width > 400 ? 2 : 1

    return (
    <div style={{display: 'grid', gridTemplateColumns: '10% 80% 10%'}}>
        <Card.Group itemsPerRow={itemsPerRow} centered style={{gridColumnStart: '2', gridColumnEnd: '3'}}>
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
    </div>
    )
}

export default Categories