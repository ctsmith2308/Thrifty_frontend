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

import { Card, CardSection, Input, Button, Spinner } from './common'
import { takePicture } from '../actions/CameraActions'

class Camera extends Component {

  // findTheTotal = response => {
    // this.props.captureReceiptTotal(response)
    // Actions.confirmationPage()
  // }

  // takePicture = () => {
  //   const googleAPI = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCO_8wXhVmfQhKyi00-eVQbg8lc_ImjE8E'
  //   let options = { base64: true }
  //   this.camera.takePictureAsync(options)
  //     .then(encodedString => {
  //       axios.post(googleAPI, {
  //         "requests":[{ "image":{ "content": encodedString.base64}, "features":[{ "type":"TEXT_DETECTION", "maxResults":1}]}]
  //       })
  //     .then(response => {
  //       this.findTheTotal(response.data.responses[0].textAnnotations[0].description)
  //     })
  //     .catch(error=>console.log(error))
  //   })
  //   .catch(error=>console.log(error))
  // }

  render() {
    if(this.props.loading){
      return (
        <Spinner size='large'/>
      )
    } else {
      return (
        <View style = {styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type= {RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style = {{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress = {this.props.takePicture}
              style = {styles.capture}
            >
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
}

mapStateToProps = ({ cameraValue }) => {
  let loading = cameraValue.loading
  return { loading }
}

export default connect(mapStateToProps, { takePicture })(Camera)

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
