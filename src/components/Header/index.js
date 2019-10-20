import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = ({ history: { location: { pathname }} }) => (
  <nav>
    <ul>
      <li>
        <Link to="/" className={(pathname=== "/") ? "disabled-link" : undefined}>Home</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
