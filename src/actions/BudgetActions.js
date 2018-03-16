import firebase from 'firebase'
import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import {
  TOTAL_BUDGET_CHANGED, UTILITIES_CHANGED, TRANSPORTATION_CHANGED, GROCERIES_CHANGED,
  SAVINGS_CHANGED, ENTERTAINMENT_CHANGED, CLOTHING_CHANGED, EMERGENCY_CHANGED,
  MISCELLANEOUS_CHANGED, BUDGET_GET_SUCCESS, BUDGET_POST_SUCCESS
} from './types'

export const totalBudgetChanged = (input) => {
  return {
    type: TOTAL_BUDGET_CHANGED,
    payload: input
  }
}
export const utilitiesChanged = (input) => {
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

export const budgetGetRequest = (userID, token) => {
  return(dispatch)=>{
    let getURL = `http://localhost:3000/budget/${userID}`
    axios.get(getURL, {headers:{ 'x-access-token':token }})
    .then(response => {
      budgetGetSuccess(dispatch)
    })
    .catch( error => {
      console.log('error from apiGetRequest ==>', error);
    })
  }
}

const postToBudget=(postBody, token) => {
  axios.post('http://localhost:3000/budget', postBody, {headers:{'x-access-token':token}})
}

const postToExpendatures=(postBody, token) => {
  axios.post('http://localhost:3000/expendatures', postBody, {headers:{'x-access-token':token}})
}

export const budgetPostRequest = (userID, budget, token) => {
  return(dispatch)=>{
    let postBody = { user_id:userID }
    Object.keys(budget).forEach(element => {
      postBody[element] = Number(budget[element])
    })
    axios.all([postToBudget(postBody, token), postToExpendatures(postBody, token)])
      .then(axios.spread((budgetRes, expendatureRes) => {
        budgetPostSuccess(dispatch)
      }))
      .catch( error => {
        console.log('error from apiPostRequest ==>', error);
    })
  }
}

const budgetGetSuccess=(dispatch)=>{
  // add data prop once psql db is assessed/fixed
    console.log('data in get success');
    dispatch({
      type: BUDGET_GET_SUCCESS,
      // payload: data
    })
}
const budgetPostSuccess=(dispatch, budget)=>{
    dispatch({
      type: BUDGET_POST_SUCCESS,
      payload: budget
    })
}
