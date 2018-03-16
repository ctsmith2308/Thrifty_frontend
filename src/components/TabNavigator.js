import React, { Component } from 'react';
import {View, Text, Button } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'

import { Container, Header, Content, Tab, Tabs, TabHeading, Icon } from 'native-base';

import Budget from './Budget';
import Camera from './Camera';
import Confirmation from './Confirmation'
import Stats from './Stats';

class TabNavigator extends Component {
  render(){
    return(
      <Container>
        <Tabs
          tabBarUnderlineStyle={{backgroundColor:'transparent'}}
          initialPage={0}
          tabBarPosition='bottom'
        >
        <Tab heading="Budget">
          <Budget />
        </Tab>
        <Tab heading="Camera">
          <Camera/>
        </Tab>
        <Tab heading="Stats">
          <Stats />
        </Tab>
     </Tabs>
    </Container>
    )
  }
}

export default TabNavigator
