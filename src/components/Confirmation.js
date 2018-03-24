import React, { Component } from "react";
import { Platform, Button, TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { CustomInput, Card, CardSection  } from './common'
import { categorySelect, changeTotal, postExpense } from '../actions'

const Item = Picker.Item;

class Confirmation extends Component {

  onInputChange(text) {
    this.props.changeTotal(text)
  }

  valueChange = value => {
    this.props.categorySelect(value)
  }

  onButtonPress = () => {
    this.props.postExpense(this.props.user_id, this.props.category, this.props.total, this.props.token)
  }

  render() {
    return (
      <Container>
          <Content style={{marginTop:75}}>
          <Text style={{alignSelf:'center',fontSize:20, paddingBottom:50}}>Does the total match the reciept total?</Text>
          <CustomInput
            label="Reciept Total"
            placeholder="0.00"
            onChangeText={ this.onInputChange.bind(this) }
            value = { this.props.total }
            />
          <Form style={{alignItems:'center',paddingTop:25, paddingBottom:25}}>
            <Picker
              mode="dropdown"
              placeholder="Select a category expense"
              selectedValue={ this.props.category }
              onValueChange={ this.valueChange }
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
          <Button color='white' title="Submit Expense" onPress={ () => this.onButtonPress() }/>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}
mapStateToProps=({ auth, spendings, cameraValue, selectedCategory })=>{
  let total = cameraValue.receiptTotal
  let user_id = auth.userID
  let token = auth.token
  let category = selectedCategory.category
  return { spendings, total, token, user_id, category }
}

export default connect(mapStateToProps, { categorySelect, changeTotal, postExpense })(Confirmation)
