import { useSearchParams } from "react-router-dom";

function useURlSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { lat: mapLat, lng: mapLng } = Object.fromEntries([...searchParams]);
  return { mapLat, mapLng, setSearchParams };
}

export default useURlSearchParams;
