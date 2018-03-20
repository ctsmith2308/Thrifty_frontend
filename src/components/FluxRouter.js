import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'

import LoginForm from './LoginForm'
import TabNavigator from './TabNavigator'
import Confirmation from './Confirmation'
import Camera from './Camera'


const FluxRouter = () => {
  return (
    <Router>
    <Scene
      hideNavBar
      navBar={null}
      key="login"
      component={ LoginForm }
    />
    <Scene key="tabNavigator"
      hideNavBar
      navBar={null}
      component={ TabNavigator }
      // initial
    />
    <Scene key="confirmationPage"
      hideNavBar
      navBar={null}
      component={ Confirmation }
    />
    <Scene key="backToCamera"
      hideNavBar
      navBar={null}
      component={ Camera }
      initial
    />
    </Router>
  )
}

export default FluxRouter
