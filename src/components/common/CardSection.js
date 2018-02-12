import React from 'react'
import { View, Text} from 'react-native'

const CardSection = (props)=>{
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

const styles = {
  containerStyle : {
    borderRadius:25,
    marginTop:5,
    marginBottom:5,
    paddingTop: 5,
    shadowOffset: {width: -5, height:3},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    marginLeft:25,
    marginRight:25
  }
}
export {CardSection}
