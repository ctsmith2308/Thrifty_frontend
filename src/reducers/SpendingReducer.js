// import {} from '../actions/types'

const INITIAL_STATE = {
  spentUtilities: '1',
  spentTransportation: '1',
  spentGroceries: '1',
  spentSavings: '1',
  spentEntertainment: '1',
  spentClothing: '1',
  spentEmergency: '1',
  spentMiscellaneous: '1'
}

export default (state = INITIAL_STATE, action ) => {
  switch(action.type){
    default:
     return state
  }
}
