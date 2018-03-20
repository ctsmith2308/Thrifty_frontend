import { RECEIPT_TOTAL, LOADING_RECEIPT_DATA} from '../actions/types'

const INITIAL_STATE = {
  receiptTotal: 0,
  loading: false
}

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case RECEIPT_TOTAL:
      return{ ...state, receiptTotal:action.payload, loading: false }
    case LOADING_RECEIPT_DATA:
      return{ ...state, loading: true }
    default:
    return state
  }
}
