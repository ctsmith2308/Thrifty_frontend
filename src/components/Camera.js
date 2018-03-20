
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

// let result = text.split(/[\n ]/)
// let numbers = result.filter((s) => s.match(/^\d+\.\d{2}$/)).map(i => parseFloat(i))
// let words = result.filter((s) => s.match(/cash/i))
// let index = words[0]
// let sorted = numbers.sort(this.sortNumber)
// let cash;
// let total;
// index.toLowerCase() === 'cash' ? cash = true : cash = false
// cash === true ? total = sorted[1] : total = sorted[0]
// console.log('here is the total', total)
// return total

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
  // takePicture = () => {
  //   this.camera.capture()
  //     .then((encodedString) => {
  //       axios.post(googleAPI, {
  //         "requests":[
  //           {
  //             "image":{
  //               "content": encodedString.data
  //             },
  //             "features":[
  //               {
  //                 "type":"TEXT_DETECTION",
  //                 "maxResults":1
  //               }
  //             ]
  //           }
  //         ]
  //       })
  //       .then((response) => {
  //         const receiptContent  = response.data.responses[0].textAnnotations[0].description;
  //         let receiptTotal = this.findTheTotal(receiptContent)
  //
  //         this.setState(previousState => {
  //           return { amount: receiptTotal};
  //         })
  //         Actions.receiptinfo({amount:this.state.amount})
  //       })
  //       .catch(error=>console.log(error));
  //     })
  //     .catch(error=>console.log(error));
  // }


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
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
import axios from 'axios'

import { captureReceiptTotal } from '../actions/CameraActions'

class Camera extends Component {

  findTheTotal = response => {
    this.props.captureReceiptTotal(response)
    Actions.confirmationPage()
  }

  takePicture = () => {
    const googleAPI = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCO_8wXhVmfQhKyi00-eVQbg8lc_ImjE8E'
    let options = { base64: true }
    this.camera.takePictureAsync(options)
      .then(encodedString => {
        axios.post(googleAPI, {
          "requests":[{ "image":{ "content": encodedString.base64}, "features":[{ "type":"TEXT_DETECTION", "maxResults":1}]}]
        })
      .then(response => {
        this.findTheTotal(response.data.responses[0].textAnnotations[0].description)
      })
      .catch(error=>console.log(error))
    })
    .catch(error=>console.log(error))
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
          >
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

mapStateToProps = ({cameraValue}) => {
  return { cameraValue }
}

export default connect(mapStateToProps, { captureReceiptTotal })(Camera)

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
