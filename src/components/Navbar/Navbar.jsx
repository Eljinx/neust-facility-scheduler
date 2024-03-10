import React, { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('#');

  // Function to determine the active section based on scroll position
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const headerSection = document.getElementById('header');
    const facultiesSection = document.getElementById('faculties');
    const bookSection = document.getElementById('book');
    const contactSection = document.getElementById('contact');

    if (
      scrollPosition < facultiesSection.offsetTop
    ) {
      setActiveSection('#header');
    } else if (
      scrollPosition >= facultiesSection.offsetTop &&
      scrollPosition < bookSection.offsetTop
    ) {
      setActiveSection('#faculties');
    } else if (
      scrollPosition >= bookSection.offsetTop &&
      scrollPosition < contactSection.offsetTop
    ) {
      setActiveSection('#book');
    } else {
      setActiveSection('#contact');
    }
  };

  // Add scroll event listener to handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the selected section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const topOffset = section.offsetTop;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  };

  return (
    <div className="navbar" id='header'>
      <ul>
        <li>
          <a href="#header" onClick={() => scrollToSection('header')} className={activeSection === '#header' ? 'active' : ''}>HOME</a>
        </li>
        <li>
          <a href="#faculties" onClick={() => scrollToSection('faculties')} className={activeSection === '#faculties' ? 'active' : ''}>FACULTIES</a>
        </li>
        <li>
          <a href="#book" onClick={() => scrollToSection('book')} className={activeSection === '#book' ? 'active' : ''}>BOOK ONLINE</a>
        </li>
        <li>
          <a href="#contact" onClick={() => scrollToSection('contact')} className={activeSection === '#contact' ? 'active' : ''}>CONTACT</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
