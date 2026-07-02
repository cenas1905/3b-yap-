import content from '@/data/content.json';
import styles from './Hero.module.css';

export default function Hero() {
  const { hero } = content;

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${hero.image})` }}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <div className="glass animate-fade-in" style={{ padding: '3.5rem', borderRadius: '12px', maxWidth: '800px' }}>
          <h1 className={styles.heading}>{hero.heading}</h1>
          <p className={styles.subheading}>{hero.subheading}</p>
          <a href="#winsa" className="btn">{hero.cta_text}</a>
        </div>
      </div>
    </section>
  );
}
