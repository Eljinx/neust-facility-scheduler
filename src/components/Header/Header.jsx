import React from 'react';
import './header.css';
import NEUST from '../../assets/images/NEUST.png';

function Header() {
  return (
    <section id="header"> {/* Wrap the Header component in a section with id */}
      <div className="header">
        <div className="row">
          <span className="text">TRANSFORMING COMMUNITIES</span>
          <div className="logo_container">
            <span className="logo">
              <img src={NEUST} alt="NEUST Logo" />
            </span>
          </div>
          <span className="text">THROUGH SCIENCE AND TECHNOLOGY</span>
        </div>
      </div>
    </section>
  );
}

export default Header;
