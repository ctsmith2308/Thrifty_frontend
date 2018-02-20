import React, { Component } from "react";
import { Platform, Button, TouchableOpacity } from "react-native";
import { Container, Header, Title, Content, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
import { connect } from 'react-redux'

import { CustomInput, Card, CardSection  } from './common'
import { postExpense } from '../actions'

const Item = Picker.Item;

class Confirmation extends Component {

  constructor(props) {
    super(props);
      this.state = {
        input: '',
        selectedCategory: ''
      }
    }

  onValueChange(value){
    this.setState({
      selectedCategory: value
    })
  }

  onInputChange(text) {
    this.setState(previousState => {
      return {
        ...previousState,
        input:text
      }
    })
  }

  onButtonPress= () => {
    let filteredValue;
    for (prop in this.props.spendings){
      if(prop === this.state.selectedCategory){
        filteredValue = this.props.spendings[prop]
      }
    }
    this.props.postExpense(this.state, filteredValue)
  }

  render() {
    return (
      <Container>
          <Content style={{marginTop:75}}>
          <Text style={{alignSelf:'center',fontSize:20, paddingBottom:50}}>Does the total match the reciept total?</Text>
          <CustomInput

            label="Reciept Total"
            placeholder="0.00"
            onChangeText={ this.onInputChange.bind(this)}
            />
          <Form style={{alignItems:'center',paddingTop:25, paddingBottom:25}}>
            <Picker
              mode="dropdown"
              placeholder="Select a category expense"
              selectedValue={this.state.selectedCategory}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Utilities" value="spentUtilities" />
              <Item label="Transportation" value="spentTransportation" />
              <Item label="groceries" value="spentGroceries" />
              <Item label="Savings" value="spentSavings" />
              <Item label="Entertainment" value="spentEntertainment" />
              <Item label="Clothing" value="spentClothing" />
              <Item label="Emergency" value="spentClothing" />
              <Item label="Miscellaneous" value="spentMiscellaneous" />
            </Picker>
          </Form>
          <TouchableOpacity
          style={{backgroundColor:'green', marginBottom:15, marginLeft:20, marginRight:20, borderRadius: 25,
          borderWidth: 3,
          borderColor:'#006600'}}>
          <Button color='white' title="Re-take photo" onPress={()=>this.onButtonPress()}/>
          </TouchableOpacity>
          <TouchableOpacity
          style={{backgroundColor:'green', marginLeft:20, marginRight:20, borderRadius: 25,
          borderWidth: 3,
          borderColor:'#006600'}}>
          <Button color='white' title="Submit Expense" onPress={()=>this.onButtonPress()}/>
          </TouchableOpacity>

        </Content>
      </Container>
    )
  }
}
mapStateToProps=({ spendings })=>{
  return { spendings }
}

export default connect(mapStateToProps, {postExpense})(Confirmation)
