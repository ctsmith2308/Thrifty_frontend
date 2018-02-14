import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';

import { Card, CardSection, Input, CustomInput, Button, Spinner } from './common'

const size = 175;
const width = 15;
const cropDegree = 85;
const textOffset = width
const textWidth = size - (textOffset*2);
const textHeight = size*(1.1 - cropDegree/360) - (textOffset*2);
class Stats extends Component {

  render(){
    return(
      <ScrollView>
      <View style={styles.contentContainerStyle}>
        <AnimatedGaugeProgress
          style={{marginTop:50, marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill= { Number(this.props.spentUtilities)/Number(this.props.utilities)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>utilities</Text>
              <Text> ${this.props.spentUtilities} | ${this.props.utilities}</Text>

            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentTransportation)/Number(this.props.transportation)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>transportation</Text>
              <Text> ${this.props.spentTransportation} | ${this.props.transportation}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentGroceries)/Number(this.props.groceries)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>groceries</Text>
              <Text> ${this.props.spentGroceries} | ${this.props.groceries}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentSavings)/Number(this.props.savings)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>savings</Text>
              <Text> ${this.props.spentSavings} | ${this.props.savings}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentEntertainment)/Number(this.props.entertainment)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>entertainment</Text>
              <Text> ${this.props.spentEntertainment} | ${this.props.entertainment}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentClothing)/Number(this.props.clothing)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>clothing</Text>
              <Text> ${this.props.spentClothing} | ${this.props.clothing}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentEmergency)/Number(this.props.emergency)*100 }
          cropDegree={cropDegree}
        >
          {(fill) => (
            <View style={styles.textView}>
              <Text style={styles.text}>emergency</Text>
              <Text> ${this.props.spentEmergency} | ${this.props.emergency}</Text>
            </View>
          )}
        </AnimatedGaugeProgress>
        <AnimatedGaugeProgress
          style={{marginBottom:18}}
          tintColor='#00cc00'
          backgroundColor= "#08923e"
          size={size}
          width={width}
          fill={Number(this.props.spentMiscellaneous)/Number(this.props.miscellaneous)*100 }
          cropDegree={cropDegree}
          >
            {(fill) => (
              <View style={styles.textView}>
                <Text style={styles.text}>miscellaneous</Text>
                <Text> ${this.props.spentMiscellaneous} | ${this.props.miscellaneous}</Text>
              </View>
            )}
        </AnimatedGaugeProgress>
        </View>
      </ScrollView>
    )
  }
}

mapStateToProps=({ userBudget, spendings })=>{
  let { utilities, transportation, groceries, savings, entertainment, clothing, emergency, miscellaneous } = userBudget
  let { spentUtilities, spentTransportation, spentGroceries, spentSavings, spentEntertainment, spentClothing, spentEmergency, spentMiscellaneous } = spendings
  return {  utilities, transportation, groceries, savings, entertainment, clothing, emergency, miscellaneous,
  spentUtilities, spentTransportation, spentGroceries, spentSavings, spentEntertainment, spentClothing, spentEmergency, spentMiscellaneous }
}

export default connect(mapStateToProps, {})(Stats)

const styles = {
  contentContainerStyle:{
    alignItems:'center',
    backgroundColor:'white'
  },
  progressStyle:{
    color:'white'
  },
  textView: {
    position: 'absolute',
    top: textOffset,
    left: textOffset,
    width: textWidth,
    height: textHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginTop:20,
    marginBottom:15
  },
}
