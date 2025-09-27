import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/logo-bigibai.webp';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Adviento Ibai" className={styles.logoImage} />
        </div>
        <div className={styles.navButtons}>
          <button className={styles.navButton}>Premios</button>
          <button className={styles.navButton}>Testimonios</button>
          <button className={styles.navButton}>Videos</button>
          <button className={styles.navButton}>FAQ</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
