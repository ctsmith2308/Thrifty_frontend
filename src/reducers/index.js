import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BudgetReducer from './BudgetReducer'
import SpendingReducer from './SpendingReducer'

export default combineReducers({
  auth: AuthReducer,
  userBudget: BudgetReducer,
  spendings: SpendingReducer
})
