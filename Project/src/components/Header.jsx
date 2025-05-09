import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Roster', path: '/roster' },
    { name: 'Communications', path: '/communications' },
    { name: 'CRM', path: '/crm' },
    { name: 'Contracts', path: '/contracts' },
    { name: 'Settings', path: '/settings' },
    { name: 'More', path: '/more' },
  ];

  return (
    <header className="header">
     <div class="logo" onclick="window.location.href='/'">
  <div class="logo-icon">#</div>
  <div class="company-name">
    <div class="line1">ROSTER</div>
    <div class="line2">GRID</div>
  </div>
</div>


      <nav className="nav">
        {links.map((link) => (
          <button
            key={link.name}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </button>
        ))}
      </nav>

      <div className="user-info">
        <span className="user-name">Michael</span>
        <div className="avatar">M</div>
      </div>
    </header>
  );
}

export default Header;
