import React from 'react';
import styles from './NavbarStyles.module.css'; 

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li><a href="#hero">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
