import content from '@/data/content.json';
import styles from './About.module.css';

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="section">
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.imageWrapper}>
          <img src={about.image} alt="Hakkımızda" className={styles.image} />
          <div className={styles.imageAccent}></div>
        </div>
        <div className={styles.textContent}>
          <h2 className="section-title" style={{ textAlign: 'left', color: 'var(--color-primary)' }}>{about.title}</h2>
          <p className={styles.description}>{about.description}</p>
        </div>
      </div>
    </section>
  );
}
