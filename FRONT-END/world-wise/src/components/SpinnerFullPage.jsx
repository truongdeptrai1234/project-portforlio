import LoadingSpinner from "./LoadingSpinner";
import styles from "./SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <LoadingSpinner />
    </div>
  );
}

export default SpinnerFullPage;
