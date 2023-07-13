import React from 'react';
import { Link} from 'react-router-dom';
import {HiUserCircle} from 'react-icons/hi2'


const Navigation = () => {

  return (
    <nav className="main-nav">
    {/* Logo */}
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.webp"
          alt="Argent Bank Logo"
          width="200"
          height="54"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='align-nav-item'>
      
                           
          <Link className="main-nav-item" to="/login">
            <HiUserCircle />
            Sign In
          </Link>
        
      </div>
    </nav>
  );
};

export default Navigation;