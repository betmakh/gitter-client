import { actions } from './app/constants/constants.jsx';
import fetch from 'isomorphic-fetch';

var tokenEl = document.querySelector('#user-token');
if (tokenEl) {
  sessionStorage.setItem('userToken', tokenEl.value);
  // var options = {
  //  url: 'https://api.gitter.im/v1/user?access_token=' + tokenEl.value,
  //  headers: {
  //    'Authorization': 'Bearer ' + token
  //  }
  // };

  //   request(options, function (err, res, body) {
  //   console.log('res', res);
  // console.log('argument', arguments);

  //   });
  fetch('https://api.gitter.im/v1/user?access_token=' + tokenEl.value, {
    headers: {
      'Authorization': 'Bearer ' + tokenEl.value,
    }
  }).then(resp => resp.json()).then(function(argument) {
    console.log('argument', arguments);
  });
}


console.log('actions', actions);
console.log(__dirname);
