import React from 'react';
import styles from './Header.module.css';
import { useMobileMenu } from '../../hooks';

const MenuToggle = () => {
  const { isOpen, toggleMenu } = useMobileMenu();

  return (
    <button
      className={`${styles.headerBar} ${isOpen ? styles.active : ''}`}
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuToggle;