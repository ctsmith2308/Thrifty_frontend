import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';

import { Key } from '../apiKey'

// import Camera from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import axios from 'axios'

const googleAPI = 'https://vision.googleapis.com/v1/images:annotate?key=' + Key

export default class SnapPhoto extends Component {
  constructor(props){
    super(props)
    this.state = {
      amount: null,
      toggleSpinner: false
    }
  }

  findTheTotal = (text) => {
      function sortNumber(b,a) {
        return a - b;
      }

      let result = text.split(/[\n ]/)
      let numbers = result.filter((s) => s.match(/^\d+\.\d{2}$/))
      let words = result.filter((s)=>s.match(/cash/i))
      let index = words[0]
      let convert = numbers.map(i=>parseFloat(i))
      let sorted = convert.sort(sortNumber)
      let cash = false
      let total;

      if(index.toLowerCase() === 'cash'){
        cash = true
      }

      if(cash===true){
        total = sorted[1]
          return total
        } else {
          total =sorted[0]
          return total
        }
  }

  takePicture = () => {
    this.camera.capture()
      .then((encodedString) => {
        axios.post(googleAPI, {
          "requests":[
            {
              "image":{
                "content": encodedString.data
              },
              "features":[
                {
                  "type":"TEXT_DETECTION",
                  "maxResults":1
                }
              ]
            }
          ]
        })
        .then((response) => {
          const receiptContent  = response.data.responses[0].textAnnotations[0].description;
          let receiptTotal = this.findTheTotal(receiptContent)

          this.setState(previousState => {
            return { amount: receiptTotal};
          })
          Actions.receiptinfo({amount:this.state.amount})
        })
        .catch(error=>console.log(error));
      })
      .catch(error=>console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ehhhy</Text>
          </View>
        );
      }
  }


      // <Camera
      //   ref={(cam) => {this.camera = cam}}
      //   style={styles.preview}
      //   aspect={Camera.constants.Aspect.fill}
      //   captureTarget={Camera.constants.CaptureTarget.memory}>
      //   <TouchableOpacity style={styles.capture}>
      //   <Text style={{fontWeight:'bold'}} onPress={this.takePicture}>Boom!</Text>
      //   </TouchableOpacity>
      //   </Camera>



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#c0392b',
      borderRadius: 5,
      padding: 10,
      margin: 40
    }
  });
