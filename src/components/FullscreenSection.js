import styles from './FullscreenSection.module.css';

export default function FullscreenSection({ item, index }) {
  return (
    <section className={styles.section} style={{ backgroundImage: `url(${item.image})` }}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.contentContainer}`}>
        <div className={`${styles.textContent} animate-fade-in`}>
          <h2 className={styles.title}>{item.name || item.title}</h2>
          <p className={styles.description}>{item.description}</p>
          <button className="btn">İncele</button>
        </div>
      </div>
    </section>
  );
}
