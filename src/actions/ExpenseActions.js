import axios from 'axios'
import { Actions } from 'react-native-router-flux'

export const postExpense = (expense) => {
  return (dispatch) => {
    console.log('EXPENSE IN ACTIONS', expense);
    dispatch({
      type:'dummy'
    })
  }
}
