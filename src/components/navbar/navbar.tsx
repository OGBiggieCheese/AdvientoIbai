import React from 'react';
import styles from './navbar.module.scss';
import logo from '../../assets/logo-bigibai.webp';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Adviento Ibai" className={styles.logoImage} />
        </div>
        <div className={styles.navButtons}>
          <button 
            className={styles.navButton}
            onClick={() => scrollToSection('votar')}
          >
            Premios
          </button>
          <button 
            className={styles.navButton}
            onClick={() => scrollToSection('testimonios')}
          >
            Testimonios
          </button>
          <button 
            className={styles.navButton}
            onClick={() => scrollToSection('videos')}
          >
            Videos
          </button>
          <button 
            className={styles.navButton}
            onClick={() => scrollToSection('faq')}
          >
            FAQ
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
