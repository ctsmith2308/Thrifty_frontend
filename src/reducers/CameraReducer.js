import { TOTAL_CHANGED, RECEIPT_TOTAL, LOADING_RECEIPT_DATA } from '../actions/types'

const INITIAL_STATE = {
  receiptTotal:'12.00',
  loading: false
}

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case RECEIPT_TOTAL:
      return { ...state, receiptTotal:action.payload, loading: false }
    case LOADING_RECEIPT_DATA:
      return { ...state, loading: true }
    case TOTAL_CHANGED:
      return { ...state, receiptTotal: action.payload }
    // case 'dummy':
    //   return { ...state }
    default:
    return state
  }
}
