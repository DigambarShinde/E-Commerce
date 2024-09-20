import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <i className="fas fa-bars"></i>
          <span>Hello</span>
        </div>
        <div className="navbar-center">
          <input style={{width: '350px',marginRight:'781px'}} type="text" placeholder="Search..." />
        </div>
        <div className="navbar-right">
          {/* Step 2 when we Click on Login Button it will Chnage the URL to /login now Link Tag will Proceed and Tell Go to /login. */}
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn">Registration</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
