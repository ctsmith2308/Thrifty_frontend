
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'
import { firebaseConfig } from './keys/FirebaseConfig'

import LoginForm from './src/components/LoginForm'
import FluxRouter from './src/components/FluxRouter'

export default class App extends Component {

  componentWillMount(){
    const config = {
    apiKey: "AIzaSyADDIob6LpAMxOQAX7LULEt1cvSMvEgdfc",
    authDomain: "thrifty-d5770.firebaseapp.com",
    databaseURL: "https://thrifty-d5770.firebaseio.com",
    projectId: "thrifty-d5770",
    storageBucket: "",
    messagingSenderId: "130986283742"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    console.disableYellowBox = true
    return (
      <Provider store={ store }>
        <FluxRouter/>
      </Provider>
    )
  }
}
