import {actionConstants} from '../constants/constants.jsx';
// import fetchUser from '../actions/user.jsx';
import { combineReducers } from 'redux';

var tokenEl = document.querySelector('#user-token');
if (tokenEl && tokenEl.value.length) {
  sessionStorage.setItem('userToken', tokenEl.value);
}

const getInitialState = () => {
	return {
		token: tokenEl.value.length && tokenEl.value || sessionStorage.getItem('userToken'),
		user:{
			isRequesting: true,
		}
	}
}

function userReducer (state = {}, action) {
	switch (action.type) {
		case actionConstants.USER_REQUEST:
			return _.extend({},state,{
				isRequesting: true
			})
			break;
		case actionConstants.USER_RECEIVE:
			return _.extend({}, state, {
				isRequesting: false,
				data: action.data
			})
		default:
			return state;
			break;
	}
}

const rootReducer = function(state = getInitialState(), action) {
	return _.extend({},state, {
		user: userReducer(state.user, action)
	})
}

export default rootReducer;