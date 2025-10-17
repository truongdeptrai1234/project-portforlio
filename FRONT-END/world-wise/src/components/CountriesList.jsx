import { useCities } from "../context/CitiesProvider";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import LoadingSpinner from "./LoadingSpinner";
import Message from "./Message";

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <LoadingSpinner />;
  if (!cities.length)
    return <Message message="Click the cities tab above to see list cities" />;

  const countries = cities.map((city) => ({
    id: city.id,
    emoji: city.emoji,
    country: city.country,
  }));

  return (
    <ul className={styles.countryList}>
      {countries.map((item) => (
        <CountryItem key={item.id} country={item} />
      ))}
    </ul>
  );
}

export default CountriesList;
