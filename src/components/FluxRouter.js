import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import LoginForm from './LoginForm'
import  TabNavigator  from './TabNavigator'

const FluxRouter=()=>{
  return (
    <Router>
    <Scene
          hideNavBar
          navBar={null}
          key="login"
          component={ LoginForm }/>
      <Scene key="tabNavigator"
        hideNavBar
        navBar={null}
        component={ TabNavigator }
        // initial
        />
    </Router>
  )
}

export default FluxRouter
