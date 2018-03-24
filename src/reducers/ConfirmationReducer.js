import { SET_CATEGORY, EXPENSE_SUBMITTED } from '../actions/types'

const INITIAL_STATE = {
  category: ''
}

export default( state=INITIAL_STATE, action ) => {
  switch(action.type){
  case SET_CATEGORY:
    return { ...state, category: action.payload }
  case EXPENSE_SUBMITTED:
    return { ...state }
  default:
    return { ...state }
  }
}
