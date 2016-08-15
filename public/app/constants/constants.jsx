import _ from 'lodash';
import keyMirror from 'keyMirror';

_.mixin({
	keyMirror: keyMirror
});

const actions = _.keyMirror({
	USER_LOGIN: null,
	USER_LOGOUT: null
});

export {actions};