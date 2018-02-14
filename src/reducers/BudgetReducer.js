import {
  TOTAL_BUDGET_CHANGED, UTILITIES_CHANGED, TRANSPORTATION_CHANGED, GROCERIES_CHANGED,
  SAVINGS_CHANGED, ENTERTAINMENT_CHANGED, CLOTHING_CHANGED,EMERGENCY_CHANGED,
  MISCELLANEOUS_CHANGED, BUDGET_GET_SUCCESS, BUDGET_POST_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
  total_budget: '500',
  utilities:'65',
  transportation: '54',
  groceries: '23',
  savings: '70',
  entertainment: '50',
  clothing: '45',
  emergency: '50',
  miscellaneous: '32'
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
      total_budget: action.payload.total_budget,
      utilities: action.payload.utilities,
      transportation: action.payload.transportation,
      groceries: action.payload.groceries,
      savings: action.payload.savings,
      entertainment: action.payload.entertainment,
      clothing: action.payload.clothing,
      emergency: action.payload.emergency,
      miscellaneous: action.payload.emergency
    }
    case BUDGET_POST_SUCCESS:
    return { ...state }
    default:
     return state
  }
}
