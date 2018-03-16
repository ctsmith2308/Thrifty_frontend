import React, { Component } from "react";
import { Platform, Button, TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { CustomInput, Card, CardSection  } from './common'
import { setCategory, postExpense } from '../actions'

const Item = Picker.Item;

class Confirmation extends Component {

  constructor(props) {
    super(props);
      this.state = {
        input: '',
        selectedCategory: ''
      }
    }

  onValueChange = value => {
    this.setState(previousState =>{
      return {
        ...previousState,
        selectedCategory: value
      }
    })
  }

  onInputChange = text => {
    this.setState(previousState => {
      return {
        ...previousState,
        input:text
      }
    })
  }

  onButtonPress = () => {
    // let filteredValue;
    // for (prop in this.props.spendings){
    //   if(prop === this.state.selectedCategory){
    //     filteredValue = this.props.spendings[prop]
    //   }
    // }
    this.props.postExpense(this.props.user_id, this.state.selectedCategory, this.props.total, this.props.token)
  }

  render() {
    return (
      <Container>
          <Content style={{marginTop:75}}>
          <Text style={{alignSelf:'center',fontSize:20, paddingBottom:50}}>Does the total match the reciept total?</Text>
          <CustomInput
            label="Reciept Total"
            placeholder="0.00"
            onChangeText={ this.onInputChange }
            value = { this.props.total }
            />
          <Form style={{alignItems:'center',paddingTop:25, paddingBottom:25}}>
            <Picker
              mode="dropdown"
              placeholder="Select a category expense"
              selectedValue={ this.state.selectedCategory }
              onValueChange={ this.onValueChange }
            >
              <Item label="Utilities" value="utilities" />
              <Item label="Transportation" value="transportation" />
              <Item label="groceries" value="groceries" />
              <Item label="Savings" value="savings" />
              <Item label="Entertainment" value="entertainment" />
              <Item label="Clothing" value="clothing" />
              <Item label="Emergency" value="clothing" />
              <Item label="Miscellaneous" value="miscellaneous" />
            </Picker>
          </Form>
          <TouchableOpacity
          style={{backgroundColor:'green', marginBottom:15, marginLeft:20, marginRight:20, borderRadius: 25,
          borderWidth: 3,
          borderColor:'#006600'}}>
          <Button color='white' title="Re-take photo" onPress={ () => Actions.backToCamera() }/>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:'green', marginLeft:20, marginRight:20, borderRadius: 25,
          borderWidth: 3,
          borderColor:'#006600'}}>
          <Button color='white' title="Submit Expense" onPress={ ()=>this.onButtonPress() }/>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}
mapStateToProps=({ auth, spendings, cameraValue })=>{
  let total = cameraValue.receiptTotal
  let user_id = auth.userID
  let token = auth.token
  return { spendings, total, token, user_id }
}

export default connect(mapStateToProps, { setCategory, postExpense })(Confirmation)
