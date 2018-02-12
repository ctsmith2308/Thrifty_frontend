import firebase from 'firebase'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import {
  UTILITIES_CHANGED, TRANSPORTATION_CHANGED, GROCERIES_CHANGED,
  SAVINGS_CHANGED, ENTERTAINMENT_CHANGED, CLOTHING_CHANGED,
  EMERGENCY_CHANGED, MISCELLANEOUS_CHANGED
} from './types'

export const utilitiesChanged = (input) =>{
  return {
    type: UTILITIES_CHANGED,
    payload: input
  }
}
export const transportationChanged = (input) => {
  return {
  type: TRANSPORTATION_CHANGED,
  payload: input
  }
}
export const groceriesChanged = (input) =>{
  return {
    type: GROCERIES_CHANGED,
    payload: input
  }
}
export const savingsChanged = (input) =>{
  return {
    type: SAVINGS_CHANGED,
    payload: input
  }
}
export const entertainmentChanged = (input) =>{
  return {
    type: ENTERTAINMENT_CHANGED,
    payload: input
  }
}
export const clothingChanged = (input) =>{
  return {
    type: CLOTHING_CHANGED,
    payload: input
  }
}
export const emergencyChanged = (input) =>{
  return {
    type: EMERGENCY_CHANGED,
    payload: input
  }
}
export const miscellaneousChanged = (input) =>{
  return {
    type: MISCELLANEOUS_CHANGED,
    payload: input
  }
}

// const apiGetRequest = (dispatch, token) => {
//   let getURL = `http://localhost:3000/users/${token}`
//   axios.get(getURL, {headers:{ 'x-access-token':token }})
//   .then(response => {
//     let userID = response.data.id
//     console.log('user id in get req', userID);
//     // loginUserSuccess(dispatch, userID)
//   })
//   .catch( error => {
//     console.log('error from apiGetRequest ==>', error);
//   })
// }
//
// const apiPostRequest = (dispatch, token) => {
//   let postURL = 'http://localhost:3000/users'
//   let postBody = { token }
//   axios.post(postURL, postBody, {headers:{'x-access-token':token}})
//   .then(response => {
//     let userID = response.data.id
//     // loginUserSuccess(dispatch, userID)
//   })
//   .catch( error => {
//     console.log('error from apiPostRequest ==>', error);
//   })
// }
