import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { TOTAL_CHANGED, SET_CATEGORY } from './types'

export const changeTotal = text => {
  return {
    type: TOTAL_CHANGED,
    payload: text
  }
}

export const categorySelect = category => {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}

export const postExpense = (user_id, category, total, token) => {
  return (dispatch) => {
    console.log(user_id, category, total, token);
    let expenseTotal = Number(total)
    let postBody = { user_id, category, expenseTotal}
    console.log('postBody', postBody);
    axios.post('http://localhost:3000/expendatures', postBody, {headers:{'x-access-token':token}})
    .then(() => {
      dispatch({
        type:'dummy'
      })
    })
  }
}
