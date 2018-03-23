import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { SET_CATEGORY } from './types'

export const postExpense = (user_id, category, total, token) => {
  return (dispatch) => {
    // console.log(user_id, category, total, token);
    // let sum = Number(total)
    let postBody = { user_id, category, total }
    axios.post('http://localhost:3000/expendatures', postBody, {headers:{'x-access-token':token}})
    .then(() => {
      dispatch({
        type:'dummy'
      })
    })
  }
}
