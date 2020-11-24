import React from 'react'
import {  Label,Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleCelled = () => (
    <Grid columns={2}>
    <Grid.Column >
      <Segment raised>
        <Label as='a' color='red' ribbon='left'>
          Overview
        </Label>
        <span >Account Details</span>

        <Image src='https://react.semantic-ui.com/logo.png' />

        

        
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='black' ribbon='left'>
          Specs
        </Label>
        <Image src='https://react.semantic-ui.com/logo.png' />

        
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleCelled