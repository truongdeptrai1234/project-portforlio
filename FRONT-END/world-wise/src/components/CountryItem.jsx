import styles from "./CountryItem.module.css";
import "flag-icons/css/flag-icons.min.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span className={`fi fi-${country.emoji.toLowerCase()}`}></span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
