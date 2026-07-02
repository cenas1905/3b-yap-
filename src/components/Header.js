'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    // We attach it to the scroll container, which is usually window, but here we will make body or a specific div scroll
    const container = document.getElementById('snap-container') || window;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <img src="/images/logo.svg" alt="Winsa" className={styles.winsaLogoImg} />
          <span className={styles.separator}>|</span>
          <span className={styles.bayi}>3B Yapı</span>
        </div>
        <nav className={styles.nav}>
          <a href="#hero">Anasayfa</a>
          <a href="#about">Hakkımızda</a>
          <a href="#winsa">Winsa Ürünleri</a>
          <a href="#mirrors">Aynacılık</a>
          <a href="#contact" className="btn" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>İletişim</a>
        </nav>
      </div>
    </header>
  );
}
