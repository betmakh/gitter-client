import React, {PropTypes} from 'react';
import AppNavbar from '../components/nav.jsx';
import { connect } from 'react-redux';
import fetchUser from '../actions/user.jsx';

class App extends React.Component {
	componentDidMount() {
    const { dispatch, token } = this.props
    dispatch(fetchUser(token));
	}
	render() {
	 	const { user, isRequesting} = this.props
	 	console.log('user', user);
		return (
			<div>
			{isRequesting ? 'Loading...' : <AppNavbar user={user}/>}
			</div>
		)
	}
}

App.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
  isRequesting: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { token, user } = state
  const {
    isRequesting,
    data
  } = user || {
    isRequesting: true,
    data: {}
  }

  return {
    token,
    user: data,
    isRequesting
  }
}

export default connect(mapStateToProps)(App)