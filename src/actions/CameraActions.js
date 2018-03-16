import axios from 'axios'
import { Actions } from 'react-native-router-flux'

import { RECEIPT_TOTAL } from './types'

export const captureReceiptTotal = (value) => {
  return {
    type:RECEIPT_TOTAL,
    payload:value
  }
}
