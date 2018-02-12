import {
  UTILITIES_CHANGED, TRANSPORTATION_CHANGED, GROCERIES_CHANGED,
  SAVINGS_CHANGED, ENTERTAINMENT_CHANGED, CLOTHING_CHANGED,
  EMERGENCY_CHANGED, MISCELLANEOUS_CHANGED
} from '../actions/types'

const INITIAL_STATE = {
  utilities:'',
  transportation: '',
  groceries: '',
  savings: '',
  entertainment: '',
  clothing: '',
  emergency: '',
  miscellaneous: ''
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case UTILITIES_CHANGED:
    return { ...state, utilities: action.payload }
    case TRANSPORTATION_CHANGED:
    return { ...state, transportation: action.payload }
    case GROCERIES_CHANGED:
    return { ...state, groceries: action.payload }
    case SAVINGS_CHANGED:
    return { ...state, savings: action.payload }
    case ENTERTAINMENT_CHANGED:
    return { ...state, entertainment: action.payload }
    case CLOTHING_CHANGED:
    return { ...state, clothing: action.payload }
    case EMERGENCY_CHANGED:
    return { ...state, emergency: action.payload }
    case MISCELLANEOUS_CHANGED:
    return { ...state, miscellaneous: action.payload }
    default:
     return state
  }
}
