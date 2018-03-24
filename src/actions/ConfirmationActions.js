import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { TOTAL_CHANGED, SET_CATEGORY, EXPENSE_SUBMITTED} from './types'

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
    let expenseTotal = Number(total)
    let postBody = { user_id, category, expenseTotal}
    axios.post('http://localhost:3000/expendatures', postBody, {headers:{'x-access-token':token}})
    .then(() => {
      dispatch({
        type: EXPENSE_SUBMITTED
      })
      Actions.tabNavigator()
    })
  }
}
