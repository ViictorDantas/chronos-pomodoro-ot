import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.cyclesDot}>
        <span className={`${styles.cyclesDots} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.shortBreakTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.workTime}`}></span>
        <span className={`${styles.cyclesDots} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
