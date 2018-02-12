import React, { Component } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, CustomInput, Button, Spinner } from './common'

import {
utilitiesChanged, transportationChanged, groceriesChanged, savingsChanged, entertainmentChanged, clothingChanged, emergencyChanged, miscellaneousChanged
} from '../actions'

class Budget extends Component {

  onUtilitiesChange(text){
    this.props.utilitiesChanged(text)
  }
  onTransportationChange(text){
    this.props.transportationChanged(text)
  }
  onGroceriesChange(text){
    this.props.groceriesChanged(text)
  }
  onSavingsChange(text){
    this.props.savingsChanged(text)
  }
  onEntertainmentChange(text){
    this.props.entertainmentChanged(text)
  }
  onClothingChange(text){
    this.props.clothingChanged(text)
  }
  onEmergencyChange(text){
    this.props.emergencyChanged(text)
  }
  onMiscellaneousChange(text){
    this.props.miscellaneousChanged(text)
  }

  render(){
    return(
      <ScrollView>
      <View style={styles.containerStyle}>
      <Text style={{alignSelf:'center', fontSize:35, marginTop:45, marginBottom:20, fontWeight:'bold', color:'#606060'}}>My Budget</Text>
        <CardSection>
          <CustomInput
            label="Utilites"
            placeholder="$0.00"
            onChangeText={this.onUtilitiesChange.bind(this)}
            value ={ 1 }
            />
        </CardSection>
          <CardSection>
            <CustomInput
              label="Transportation"
              placeholder="$0.00"
              onChangeText={this.onTransportationChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Groceries"
              placeholder="$0.00"
              onChangeText={this.onGroceriesChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Savings"
              placeholder="$0.00"
              onChangeText={this.onSavingsChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Entertainment"
              placeholder="$0.00"
              onChangeText={this.onEntertainmentChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Clothing"
              placeholder="$0.00"
              onChangeText={this.onClothingChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Emergency"
              placeholder="$0.00"
              onChangeText={this.onEmergencyChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <CardSection>
            <CustomInput
              label="Miscellaneous"
              placeholder="$0.00"
              onChangeText={this.onMiscellaneousChange.bind(this)}
              value ={ 1 }
              />
          </CardSection>
          <View style={{height:50, marginTop:10, marginLeft:25, marginRight:25}}>
            <Button onPress={ ()=>console.log('i')}>
              Submit
            </Button>
          </View>
      </View>
      </ScrollView>
    )
  }
}

mapStateToProps = (budget) => {
  return { budget }
}

export default connect(mapStateToProps, {utilitiesChanged, transportationChanged, groceriesChanged, savingsChanged, entertainmentChanged, clothingChanged, emergencyChanged, miscellaneousChanged
})(Budget)

const styles = {
  containerStyle:{
    flex:1,
    backgroundColor:'#e6ffe6',
    paddingBottom:75
  }
}
