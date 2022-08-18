import styles from "./door.module.css";

type Props = {
  number: number;
  isSelected: boolean;
};

export const Door = ({ number, isSelected }: Props) => {
  let doorStyle = `${styles.door} `;
  doorStyle += isSelected ? `${styles.selected}` : "";

  return (
    <div className={styles.container}>
      <div className={doorStyle}>
        <h1 className={styles.number}>{number}</h1>
        <div className={styles.knob} />
      </div>
      <h1 className={styles.floor} />
    </div>
  );
};
