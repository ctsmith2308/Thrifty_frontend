import { RECEIPT_TOTAL } from '../actions/types'

const INITIAL_STATE = {
  receiptTotal: 0
}

export default (state=INITIAL_STATE, action) =>{
  switch (action.type) {
    case RECEIPT_TOTAL:
      return{ ...state, receiptTotal:action.payload }
    default:
    return state
  }
}
