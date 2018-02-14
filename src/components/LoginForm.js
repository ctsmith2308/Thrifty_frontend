import React, { Component } from 'react'
import {  View, KeyboardAvoidingView, ScrollView, Text, Image} from 'react-native'
import { connect } from 'react-redux'
import actions from 'react-native-router-flux'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { emailChanged, passwordChanged, loginUser, loginUserFail } from '../actions'

class LoginForm extends Component {

  onEmailChange(text){
    this.props.emailChanged(text)
  }

  onPasswordChange(text){
    this.props.passwordChanged(text)
  }

  onButtonPress(){
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError(){
    if(this.props.error){
      return (
        <View style={{backgroundColor:'white'}}>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      )
    }
  }

  renderButton(){
    if(this.props.loading){
      return (
        <Spinner size='large'/>
      )
    } else {
      return (
        <Button onPress={ this.onButtonPress.bind(this) }>
          Login
        </Button>
      )
    }
  }

  render(){
    return(
      <KeyboardAvoidingView behavior={"padding"} style={styles.containerStyle}>
      <ScrollView>
      <Text style={{alignSelf:'center', fontSize:85, marginTop:85, fontWeight:'bold', color:'#606060'}}>Thrifty</Text>
      <Image
      style={{width:200,height:200, alignSelf:'center', marginBottom:20, marginTop:10}}
      source={require('../../wallet.png')}
      />
        <CardSection style={{marginTop:15}}>
          <Input
            label='Email'
            placeholder='email@gmail.com'
            onChangeText ={ this.onEmailChange.bind(this) }
            value ={ this.props.email }
            />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={ this.onPasswordChange.bind(this) }
            value ={ this.props.password }
            />
        </CardSection>
          { this.renderError() }
        <View style={styles.viewStyle}>
          { this.renderButton() }
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

mapStateToProps = state => {
  const { email, password, error, loading } = state.auth
  return {
    email,
    password,
    error,
    loading
  }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, loginUserFail })(LoginForm)

const styles = {
  containerStyle:{
    flex:1,
    // backgroundColor:'#e6ffe6',
  },
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color:'red',
  },
  viewStyle:{
    marginTop:5,
    marginBottom:5,
    paddingTop: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginLeft:25,
    marginRight:25
  }
}
