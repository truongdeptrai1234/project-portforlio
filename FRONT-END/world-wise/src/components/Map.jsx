import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../context/CitiesProvider";
import "flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";
import useGeoLocation from "../hooks/useGeoLocation";
import useURlSearchParams from "../hooks/useURlSearchParams";

function Map() {
  const navigate = useNavigate();
  const [mapPos, setMapPos] = useState([40, 0]);
  const { cities } = useCities();
  const { isLoading, error, userPosition, getPosition } = useGeoLocation();
  const { mapLat, mapLng } = useURlSearchParams();
  const userPositionTemp =
    cities.find((ct) => ct?.position.lat === userPosition?.lat) || null;
  useEffect(() => {
    if (mapLat && mapLng) setMapPos([mapLat, mapLng]);
  }, [mapLat, mapLng]);
  //can use event handler instead
  useEffect(() => {
    if (!userPosition?.lat && !userPosition?.lng) return;
    navigate(`form?lat=${userPosition.lat}&lng=${userPosition.lng}`);
  }, [userPosition]);
  return (
    <div className={styles.mapContainer}>
      {error && <span className="error">{error}</span>}

      {!userPositionTemp && (
        <Button type="position" onClick={getPosition}>
          {isLoading ? <LoadingSpinner type="position" /> : "Get your position"}
        </Button>
      )}

      <MapContainer
        className={styles.map}
        center={mapPos}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((ct) => (
          <Marker position={[ct.position.lat, ct.position.lng]} key={ct.id}>
            <Popup>
              <span className={`fi fi-${ct.emoji.toLowerCase()} fis`}></span>
              <span>{ct.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeView position={mapPos} />
        <GetEventOnClickMap />
      </MapContainer>
    </div>
  );
}
function ChangeView({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
function GetEventOnClickMap() {
  const navigate = useNavigate();
  useMapEvent("click", (e) => {
    const { lat, lng } = e.latlng;
    navigate(`form?lat=${lat}&lng=${lng}`);
  });

  return null;
}
export default Map;
