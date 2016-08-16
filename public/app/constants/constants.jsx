import _ from 'lodash';
import keyMirror from 'keyMirror';

_.mixin({
	keyMirror: keyMirror
});

const actionConstants = _.keyMirror({
	USER_LOGIN: null,
	USER_LOGOUT: null,
	USER_FETCH: null,
	USER_RECEIVE: null,
	USER_REQUEST: null
});

const requests = _.keyMirror({

})

export {actionConstants, requests};