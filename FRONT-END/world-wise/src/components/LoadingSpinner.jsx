import styles from "./LoadingSpinner.module.css";

function LoadingSpinner({ type = null }) {
  return (
    <div className={styles.spinnerContainer}>
      <div
        className={styles.spinner + ` ${type === "position" ? styles.sm : ""}`}
      ></div>
    </div>
  );
}

export default LoadingSpinner;
