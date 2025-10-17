import { useCallback, useState } from "react";

export default function useGeoLocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [userPosition, setUserPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);

  const getPosition = useCallback(function () {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, []);

  return {
    isLoading,
    userPosition,
    error,
    getPosition,
  };
}
