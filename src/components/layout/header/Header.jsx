import React from 'react';
import { Link } from 'react-router';

import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <Link className="Header__nav-item" to="/">First</Link>
      <Link className="Header__nav-item" to="/second">Second</Link>
    </header>
  );
};

export default Header;
