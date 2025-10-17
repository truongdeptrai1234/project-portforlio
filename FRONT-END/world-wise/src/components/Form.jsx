import { useEffect, useState } from "react";
import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import useURlSearchParams from "../hooks/useURlSearchParams";
import "flag-icons/css/flag-icons.min.css";
import LoadingSpinner from "./LoadingSpinner";
import Message from "./Message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../context/CitiesProvider";
import { useNavigate } from "react-router-dom";

const BASE_REVERSE_GEO_URL =
  "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const { mapLat, mapLng } = useURlSearchParams();
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState(null);
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date.toISOString().length || !cityName) return;
    const cityData = {
      cityName,
      country: country.name,
      emoji: country.emoji,
      date: date.toISOString(),
      notes,
      position: { lat: +mapLat, lng: +mapLng },
    };
    await createCity(cityData);
    navigate("/app/cities");
  };
  useEffect(() => {
    async function getReverseGeoData() {
      if (!mapLat && !mapLng) return;
      try {
        setIsLoadingData(true);
        setError(null);
        const res = await fetch(
          `${BASE_REVERSE_GEO_URL}?latitude=${mapLat}&longitude=${mapLng}`
        );
        if (!res.ok)
          throw new Error(`Failed to get reverse geo data,${res.status}`);
        const data = await res.json();
        if (!data.city)
          throw new Error(
            "That location is not a city or belong to city. Click somewhere else 💫"
          );

        setCityName(data.city);
        setCountry({ name: data.countryName, emoji: data.countryCode });
        setIsLoadingData(false);
      } catch (error) {
        setError(error.message);
        setIsLoadingData(false);
      }
    }
    getReverseGeoData();
  }, [mapLat, mapLng]);
  if (!cityName || isLoadingData) return <LoadingSpinner />;
  if (!mapLat && !mapLng)
    return <Message message="Click somewhere on map to get start" />;
  if (error) return <Message message={error} />;
  return (
    <form
      className={styles.form + ` ${isLoading ? styles["loading"] : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          required
        />
        {country && (
          <span
            className={
              styles.flag + ` fi fi-${country.emoji.toLowerCase()} fis`
            }
          ></span>
        )}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          portalId="root"
          showIcon
          toggleCalendarOnIconClick
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type={"primary"}>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
