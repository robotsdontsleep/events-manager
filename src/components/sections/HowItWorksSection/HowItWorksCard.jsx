import styles from "./HowItWorks.module.css";

export const HowItWorksCard = ({ image: url, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <div className={styles["image-wrapper"]}>
          <img src={url} alt="step_image" />
        </div>
      </div>
      <div className={styles["card-body"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
