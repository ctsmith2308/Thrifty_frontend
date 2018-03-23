import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types'

const INITIAL_STATE = {
  token: '',
  email: '',
  password: '',
  userID: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case EMAIL_CHANGED:
    return { ...state, email: action.payload }
    case PASSWORD_CHANGED:
    return { ...state, password: action.payload }
    case LOGIN_USER_SUCCESS:
    return { ...INITIAL_STATE, userID: action.payload.userID, token:action.payload.token, error: '', loading:false }
    case LOGIN_USER_FAIL:
    return { ...state, error: 'Authentication Failed.', loading:false }
    case LOGIN_USER:
    return {...state, loading: true, error: '',}
    default:
     return state
  }
}
