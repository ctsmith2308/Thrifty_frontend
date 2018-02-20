import axios from 'axios'
import { Actions } from 'react-native-router-flux'

export const postExpense = (expense, value) => {
  return (dispatch) => {
    let sum = Number(value) + Number(expense.input)
    //post route here 
    dispatch({
      type:'dummy'
    })
  }
}
