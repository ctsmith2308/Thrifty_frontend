import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button =({onPress, children})=>{
  const { buttonStyle, textStyle }= styles
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle} >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle:{
    alignSelf:'center',
    color:'white',
    fontSize:16,
    fontWeight:'600',
    paddingTop:10,
    paddingBottom:10
  },
  buttonStyle:{
    // borderRadius:25,
    flex:1,
    alignSelf:'stretch',
    backgroundColor:'#e7a03a',
    borderRadius: 25,
    // borderWidth: 1,
    // borderColor:'white',
    margin:5,
    shadowOffset: {width: 0, height:3},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  }
}

export {Button}
