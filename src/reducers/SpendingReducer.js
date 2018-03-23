import {} from '../actions/types'

const INITIAL_STATE = {
  spentUtilities: '',
  spentTransportation: '',
  spentGroceries: '',
  spentSavings: '',
  spentEntertainment: '',
  spentClothing: '',
  spentEmergency: '',
  spentMiscellaneous: ''
}

export default (state = INITIAL_STATE, action ) => {
  switch(action.type){
    default:
     return state
  }
}
