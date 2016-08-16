import {actionConstants} from '../constants/constants.jsx';

export const userLogin = (user) => {
  return {
    type: actionConstants.USER_LOGIN,
    user
  }
}

function requestUser (token) {
  return {
    type: actionConstants.USER_REQUEST,
    token
  }
}

function receiveUser (token, json) {
	return {
		type: actionConstants.USER_RECEIVE,
		data: json,
		token		
	}
}

export default (token) => {
	return dispatch => {
    dispatch(requestUser(token))
    return fetch(`https://api.gitter.im/v1/user?access_token=${token}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(token, json[0])))
  }
  return {
    type: actionConstants.FETCH_USER,
    token
  }
}