import {
  TOTAL_BUDGET_CHANGED, UTILITIES_CHANGED, TRANSPORTATION_CHANGED, GROCERIES_CHANGED,
  SAVINGS_CHANGED, ENTERTAINMENT_CHANGED, CLOTHING_CHANGED,EMERGENCY_CHANGED,
  MISCELLANEOUS_CHANGED, BUDGET_GET_SUCCESS, BUDGET_POST_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  total_budget: '',
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
    case TOTAL_BUDGET_CHANGED:
    return { ...state, total_budget:action.payload}
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
    case BUDGET_GET_SUCCESS:
    return {
      ...state,
      total_budget: action.payload.total_budget.toString(),
      utilities: action.payload.utilities.toString(),
      transportation: action.payload.transportation.toString(),
      groceries: action.payload.groceries.toString(),
      savings: action.payload.savings.toString(),
      entertainment: action.payload.entertainment.toString(),
      clothing: action.payload.clothing.toString(),
      emergency: action.payload.emergency.toString(),
      miscellaneous: action.payload.emergency.toString()
    }
    case BUDGET_POST_SUCCESS:
    return { ...state }
    default:
     return state
  }
}
