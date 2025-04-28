import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const Header = ({
  preloaderImgSrc = "wp-content/themes/bitrader/assets/img/logo/preloader.png",
  switchBtnBgColor = "rgb(0, 208, 148)",
  switchBtnImgSrc = "wp-content/themes/bitrader/assets/img/icons/moon.svg",
}) => {
  const { theme, toggleTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          {/* Add your navigation items here */}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;