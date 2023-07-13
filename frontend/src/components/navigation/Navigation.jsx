import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

  return (
    <nav>
      <Link>
        <h1>Argent Bank</h1>
      </Link>
      <div>
        <Link>
          <span>userName</span>
        </Link>
        <Link>
          Sign Out
        </Link>

        <Link>
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;