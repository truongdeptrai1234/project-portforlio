import styles from "./CitiesList.module.css";
import CitiItem from "./CitiItem";
import LoadingSpinner from "./LoadingSpinner";
import Message from "./Message";
import { useCities } from "../context/CitiesProvider";

function CitiesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <LoadingSpinner />;
  if (!cities.length)
    return <Message message="Click the cities tab above to see list cities" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((item) => (
        <CitiItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default CitiesList;
