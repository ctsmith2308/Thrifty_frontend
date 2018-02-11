import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import { connect } from 'react-redux'
// import actions from 'react-native-router-flux'
// import { Card, CardSection, Input, Button, Spinner } from './common'
// import { emailChanged, passwordChanged, loginUser, loginUserFail } from '../actions'

export default class Budget extends Component {

  render(){
    return(
      <View>
        <Text>Im the budget component</Text>
      </View>
    )
  }
}

// mapStateToProps = state => {
//   const { email, password, error, loading } = state.auth
//   return {
//     email,
//     password,
//     error,
//     loading
//   }
// }
// export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, loginUserFail })(LoginForm)

// const styles = {
//   errorTextStyle:{
//     fontSize: 20,
//     alignSelf: 'center',
//     color:'red',
//   }
// }
