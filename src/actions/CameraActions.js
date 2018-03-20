import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { RECEIPT_TOTAL } from './types'

export const captureReceiptTotal = text => {
  let result = text.split(/[\n ]/)
  let numbers = result.filter( s => s.match(/(\s)*\d+(\,\d+)*\.\d{2}/g)).filter(ele => {
   if(!isNaN(parseInt(ele))) return parseFloat(ele)
  }).sort((a,b) => b - a)
  // console.log('here are the numbers', numbers);
  let total = numbers[0]
  let words = result.filter( s => s.match(/cash/gi))
  words.includes('cash'.toLowerCase) ? total = numbers[1] : total = numbers[0]
  return {
  type: RECEIPT_TOTAL,
  payload: total
  }
}
