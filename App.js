
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './src/components/LoginForm'
import { firebaseConfig } from './keys/FirebaseConfig'

export default class App extends Component {

  componentWillMount(){
    const config = firebaseConfig
  //   {
  //   apiKey: "AIzaSyADDIob6LpAMxOQAX7LULEt1cvSMvEgdfc",
  //   authDomain: "thrifty-d5770.firebaseapp.com",
  //   databaseURL: "https://thrifty-d5770.firebaseio.com",
  //   projectId: "thrifty-d5770",
  //   storageBucket: "",
  //   messagingSenderId: "130986283742"
  // };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={ store }>
        <LoginForm/>
      </Provider>
    );
  }
}
