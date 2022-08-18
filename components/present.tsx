import styles from "./present.module.css";

export const Present = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lid} />
      <div className={styles.body} />
      <div className={styles.horizontalBow} />
      <div className={styles.verticalBow} />
    </div>
  );
};
