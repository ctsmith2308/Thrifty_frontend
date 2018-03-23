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
