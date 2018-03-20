import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { RECEIPT_TOTAL } from './types'

export const captureReceiptTotal = text => {
  // let total = value
  // sortNumber = ( b, a ) => {
  //   return a - b;
  // }
  // let result = text.split(/[\n ]/)
  // let numbers = result.filter((s) => s.match(/^\d+\.\d{2}$/)).map(i => parseFloat(i))
  // let words = result.filter((s) => s.match(/cash/i))
  // let index = words[0]
  // let sorted = numbers.sort(sortNumber)
  // let cash;
  // let total;
  // index.toLowerCase() === 'cash' ? cash = true : cash = false
  // cash === true ? total = sorted[1] : total = sorted[0]
  // console.log('here is the total', total)
  // return total
sortNumber = (b,a) => {
         return a - b;
       }

       let result = text.split(/[\n ]/)
       let numbers = result.filter( s => s.match(/(\s)*\d+(\,\d+)*\.\d{2}/g)).filter(ele => {
         if(!isNaN(parseInt(ele))) return parseFloat(ele)
       }).sort((a,b) => b - a)
       // let sorted = numbers.sort((a,b) => b - a )
       console.log('here are the numbers', numbers);
       // console.log('sorted array', sorted);
       let total = numbers[0]
       // let sorted = numbers.map(ele => {
       //   if(!isNaN(parseInt(ele))) return parseFloat(ele)
       // })
       // let words = result.filter((s)=>s.match(/cash/i))
       // let index = words[0]
       // let convert = numbers.map(i=>parseFloat(i))
       // let sorted = convert.sort(sortNumber)
       // let cash = false
       // let total;
       // if(index.toLowerCase() === 'cash'){
       //   cash = true
       // }
       // if(cash===true){
       //   total = sorted[1]
       //     return total
       //   } else {
       //     total = sorted[0]
       //     // return total
       //   }

  return {
    type: RECEIPT_TOTAL,
    payload: total
  }
}
