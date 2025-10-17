import { Link } from "react-router-dom";
import styles from "./CitiItem.module.css";
import "flag-icons/css/flag-icons.min.css";
import { useCities } from "../context/CitiesProvider";

const formatDate = (date) => {
  return new Intl.DateTimeFormat(navigator.language, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

function CitiItem({ item }) {
  const { lat, lng } = item.position;
  const { currentCity } = useCities();
  const { deleteCity } = useCities();

  function handleDeleteCity(e) {
    e.preventDefault();
    deleteCity(item.id);
  }
  return (
    <li>
      <Link
        to={`${item.id}?lat=${lat}&lng=${lng}`}
        className={
          styles.cityItem +
          ` ${
            currentCity?.id === item.id ? `${styles["cityItem--active"]}` : ""
          }`
        }
      >
        <span
          className={styles.emoji + ` fi fi-${item.emoji.toLowerCase()} fis`}
        ></span>
        <h3 className={styles.name}>{item.cityName}</h3>
        <time className={styles.time}>({formatDate(item.date)})</time>
        <button className={styles.deleteBtn} onClick={handleDeleteCity}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CitiItem;
