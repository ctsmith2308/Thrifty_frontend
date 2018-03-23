import { SET_CATEGORY } from '../actions/types'

const INITIAL_STATE = {
  category: ''
}

export default( state=INITIAL_STATE, action ) => {
  switch(action.type){
  case SET_CATEGORY:
    return { ...state, category: action.payload }
  default:
    return { ...state }
  }
}
