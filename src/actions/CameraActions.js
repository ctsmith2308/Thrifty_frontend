import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { RECEIPT_TOTAL, LOADING_RECEIPT_DATA } from './types'

const captureReceiptTotal = text => {
  let result = text.split(/[\n ]/)
  let numbers = result.filter( s => s.match(/(\s)*\d+(\,\d+)*\.\d{2}/g)).filter(ele => {
      if(!isNaN(parseInt(ele))) return parseFloat(ele)
    }).sort((a,b) => b - a)
  let total = numbers[0]
  let words = result.filter( s => s.match(/cash/gi))
  words.includes('cash'.toLowerCase) ? total = numbers[1] : total = numbers[0]
  return {
    type: RECEIPT_TOTAL,
    payload: total
  }
}

export const takePicture = () => {
  return(dispatch) => {
    dispatch({
     type: LOADING_RECEIPT_DATA
    })
    const googleAPI = 'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCO_8wXhVmfQhKyi00-eVQbg8lc_ImjE8E'
    this.camera.takePictureAsync({ base64: true })
      .then(encodedString => {
        axios.post(googleAPI, {
          "requests":[{ "image":{ "content": encodedString.base64}, "features":[{ "type":"TEXT_DETECTION", "maxResults":1}]}]
        })
      .then(response => {
        captureReceiptTotal(response.data.responses[0].textAnnotations[0].description)
      })
      .catch(error=>console.log(error))
    })
    .catch(error=>console.log(error))
  }
}
