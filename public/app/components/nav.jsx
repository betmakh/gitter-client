import React, {PropTypes} from 'react';

const NavBar = (props) => {
	const {user, onSelect} = props;
	console.log('props', props);

	return (<nav role="navigation" className="navbar navbar-default">
	  <div className="container">
	    <div className="navbar-header">
	      <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
	      <p href="#" className="navbar-logo"><img src="/img/logo.png"/></p>
	    </div>
	    <div id="navbar-collapse" className="collapse navbar-collapse">
	      <ul className="nav navbar-nav">
	        <li><a href="/">My App</a></li>
	      </ul>
	      <ul className="nav navbar-nav navbar-right">
		      {user ? <li><img src={user.avatarUrlMedium}/><a href="" onClick={e => onSelect(e)}>LogOut</a></li> : <li><a href="/login">Sign in</a></li>} 
	      </ul>
	    </div>
	  </div>
	</nav>)
}

NavBar.propTypes = {
	user: PropTypes.object,
	onSelect: PropTypes.func
};

export default NavBar;