import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import BudgetReducer from './BudgetReducer'
import SpendingReducer from './SpendingReducer'
import CameraReducer from './CameraReducer'

export default combineReducers({
  auth: AuthReducer,
  userBudget: BudgetReducer,
  spendings: SpendingReducer,
  cameraValue: CameraReducer
})
