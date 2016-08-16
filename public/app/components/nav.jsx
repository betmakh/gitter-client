import React from 'react';

const navBar = (user, itemSelect) => {
	<nav role="navigation" class="navbar navbar-default">
	  <div class="container">
	    <div class="navbar-header">
	      <button type="button" data-toggle="collapse" data-target="#navbar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
	      <p href="#" class="navbar-logo"><img src="/img/logo.png"/></p>
	    </div>
	    <div id="navbar-collapse" class="collapse navbar-collapse">
	      <ul class="nav navbar-nav">
	        <li><a href="/">My App</a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
		      {user ? <li><img src={user.avatarUrlMedium}/><a href="" onClick={e => itemSelected(e)}>LogOut</a></li> : <li><a href="/login">Sign in</a></li>} 
	      </ul>
	    </div>
	  </div>
	</nav>
}

export default navBar;