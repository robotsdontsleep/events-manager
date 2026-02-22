import styles from "./Section.module.css";

export const Section = ({ title, description, content, bg }) => {
  return (
    <section className={`${styles.section} ${bg ? styles.bg : ""}`}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles["section-body"]}>{content}</div>
      </div>
    </section>
  );
};
