// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   TouchableOpacity,
//   View
// } from 'react-native';
//
// import { Key } from '../apiKey'
//
// // import Camera from 'react-native-camera';
// import { Actions } from 'react-native-router-flux';
// import axios from 'axios'
//
// const googleAPI = 'https://vision.googleapis.com/v1/images:annotate?key=' + Key
//
// export default class SnapPhoto extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       amount: null,
//       toggleSpinner: false
//     }
//   }
//
//   findTheTotal = (text) => {
//       function sortNumber(b,a) {
//         return a - b;
//       }
//
//       let result = text.split(/[\n ]/)
//       let numbers = result.filter((s) => s.match(/^\d+\.\d{2}$/))
//       let words = result.filter((s)=>s.match(/cash/i))
//       let index = words[0]
//       let convert = numbers.map(i=>parseFloat(i))
//       let sorted = convert.sort(sortNumber)
//       let cash = false
//       let total;
//
//       if(index.toLowerCase() === 'cash'){
//         cash = true
//       }
//
//       if(cash===true){
//         total = sorted[1]
//           return total
//         } else {
//           total =sorted[0]
//           return total
//         }
//   }
//
//   takePicture = () => {
//     this.camera.capture()
//       .then((encodedString) => {
//         axios.post(googleAPI, {
//           "requests":[
//             {
//               "image":{
//                 "content": encodedString.data
//               },
//               "features":[
//                 {
//                   "type":"TEXT_DETECTION",
//                   "maxResults":1
//                 }
//               ]
//             }
//           ]
//         })
//         .then((response) => {
//           const receiptContent  = response.data.responses[0].textAnnotations[0].description;
//           let receiptTotal = this.findTheTotal(receiptContent)
//
//           this.setState(previousState => {
//             return { amount: receiptTotal};
//           })
//           Actions.receiptinfo({amount:this.state.amount})
//         })
//         .catch(error=>console.log(error));
//       })
//       .catch(error=>console.log(error));
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Ehhhy</Text>
//           </View>
//         );
//       }
//   }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'row',
//     },
//     preview: {
//       flex: 1,
//       justifyContent: 'flex-end',
//       alignItems: 'center'
//     },
//     capture: {
//       flex: 0,
//       backgroundColor: '#c0392b',
//       borderRadius: 5,
//       padding: 10,
//       margin: 40
//     }
//   });


'use strict';
import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
