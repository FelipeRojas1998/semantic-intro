import React from 'react'

import {  Label,Grid, Segment} from 'semantic-ui-react'
import Card from './Card'
import ContentBlock from './ContentBlock'

const GridExampleCelled = () => (
    <Grid columns={2}>
    <Grid.Column >
      <Segment raised>
        <Label as='a' color='red' ribbon='left'>
          Overview
        </Label>
        <span >Account Details</span>
        <Card/>
        

        

        
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='black' ribbon='left'>
          Specs
        </Label>
        <ContentBlock/>

        
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleCelled