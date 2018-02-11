import firebase from 'firebase'
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types'
import axios from 'axios'

export const emailChanged = (text) => {
  return {
  type: EMAIL_CHANGED,
  payload: text
  }
}

export const passwordChanged = (text) =>{
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

const apiGetRequest = (token) => {
  let getURL = `http://localhost:3000/users/${token}`
  axios.get(getURL, headers:{ 'x-access-token':token })
  .then(response => {
    let usersID = response.data
    loginUserSuccess(dispatch, usersID)
  })
  .catch( error => {
    console.log('error from apiGetRequest ==>', error);
  })
}

const apiPostRequest = (token) => {
  let postURL = 'http://localhost:3000/users'
  let postBody = { token }
  axios.post(postURL, postBody, headers:{'x-access-token':token})
  .then(response => {
    let usersID = response.data
    loginUserSuccess(dispatch, usersID)
  })
  .catch( error => {
    console.log('error from apiPostRequest ==>', error);
  })
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type:LOGIN_USER })
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then( user => { firebase.auth().currentUser.getIdToken(true)
      .then(token => {
        apiGetRequest(token)
      })
    })
    .catch((error)=>{
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => { firebase.auth().currentUser.getIdToken(true)
        .then(token => {
          apiPostRequest(token)
        })
      })
      .catch(() => loginUserFail(dispatch))
    })
  }
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, usersID) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload:userID
  })
}
