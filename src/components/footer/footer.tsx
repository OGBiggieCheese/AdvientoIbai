import React from 'react';
import styles from './footer.module.scss';
import logoBigIbai from '../../assets/logo-bigibai.webp';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoBigIbai} alt="Big Ibai Logo" className={styles.logo} />
        </div>
        
        <div className={styles.linksContainer}>
          <a href="#" className={styles.link}>Privacidad</a>
          <a href="#" className={styles.link}>Aviso Legal</a>
          <a href="#" className={styles.link}>Política de Cookies</a>
          <a href="#" className={styles.link}>Bases del Sorteo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
