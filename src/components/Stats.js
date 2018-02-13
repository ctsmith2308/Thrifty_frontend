import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { AnimatedGaugeProgress, GaugeProgress } from 'react-native-simple-gauge';
export default class Stats extends Component {

  render(){
    return(
      <View>
      <AnimatedGaugeProgress
        size={200}
        width={15}
        fill={100}
        rotation={90}
        cropDegree={90}
        tintColor="#4682b4"
        backgroundColor="#b0c4de"
        stroke={[2, 2]}
        strokeCap="circle" />
      </View>
    )
  }
}
