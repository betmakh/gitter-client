import {actions} from '../constants/constants.jsx';

export const userLogin = (user) => {
  return {
    type: actions.USER_LOGIN,
    user
  }
}

function requestUser (token) {
  return {
    type: actions.USER_REQUEST,
    token
  }
}

function receiveUser (token, json) {
	return {
		type: actions.USER_RECEIVE,
		data: json,
		token		
	}
}

export default fetchUser = (token) => {
	return dispatch => {
    dispatch(requestUser(token))
    return fetch(`https://api.gitter.im/v1/user?access_token=${token}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUser(token, json)))
  }
  return {
    type: actions.FETCH_USER,
    token
  }
}