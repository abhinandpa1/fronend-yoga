import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      style={{
        padding: '1rem 2rem',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#d291bc',
        }}
      >
        YOGA
      </h1>
      <nav>
        <ul
          style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#d291bc',
                border: 'none',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s ease',
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#d291bc',
                border: 'none',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s ease',
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#d291bc',
                border: 'none',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s ease',
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#d291bc',
                border: 'none',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s ease',
              }}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1rem',
                fontWeight: '500',
                color: '#fff',
                backgroundColor: '#d291bc',
                border: 'none',
                borderRadius: '25px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background-color 0.3s ease',
              }}
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;







