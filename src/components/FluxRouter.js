import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import LoginForm from './LoginForm'
import  TabNavigator  from './TabNavigator'

const FluxRouter=()=>{
  return (
    <Router
    navigationBarStyle={{ backgroundColor: '#e6ffe6' }}>
    <Scene hideNavBar
          navBar={null}
          key="login"
          component={ LoginForm }/>
      <Scene key="tabNavigator" component={ TabNavigator }/>
    </Router>
  )
}

export default FluxRouter
