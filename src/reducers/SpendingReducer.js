import {} from '../actions/types'

const INITIAL_STATE = {
  spentUtilities: '34',
  spentTransportation: '10',
  spentGroceries: '19',
  spentSavings: '70',
  spentEntertainment: '5',
  spentClothing: '19',
  spentEmergency: '43',
  spentMiscellaneous: '29'
}

export default (state = INITIAL_STATE, action ) => {
  switch(action.type){
    default:
     return state
  }
}
