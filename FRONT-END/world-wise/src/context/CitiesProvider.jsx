/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const BASE_URL = "http://localhost:8000/cities";

const CitiesContext = createContext();
const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return { ...state, cities: action.payload, isLoading: false };
    case "city/loaded":
      return { ...state, currentCity: action.payload, isLoading: false };
    case "cities/deleted":
      return {
        ...state,
        cities: state.cities.filter((ct) => ct.id !== action.payload.id),
        isLoading: false,
      };
    case "cities/created":
      return {
        ...state,
        cities: [action.payload, ...state.cities],
        currentCity: action.payload,
        isLoading: false,
      };
    case "rejected":
      return { ...state, error: action.payload, isLoading: false };

    default:
      throw new Error("No case/type action founded!");
  }
};
function CitiesProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState(null);
  // const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error(`failed to fetch status:${res.status}`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected" });
      }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === state.currentCity.id) return;
      dispatch({ type: "loading" });
      try {
        const res = await fetch(BASE_URL + `/${id}`);
        if (!res.ok) throw new Error(`failed to get city status:${res.status}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected" });
      }
    },
    [state.currentCity.id]
  );
  async function createCity(city) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        header: { "Content-Type": "application/json" },
        body: JSON.stringify(city),
      });
      if (!res.ok)
        throw new Error(`failed to create city status:${res.status}`);
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
    } catch (error) {
      dispatch({ type: "rejected" });
    }
  }
  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok)
        throw new Error(`failed to delete city status:${res.status}`);
      const data = await res.json();
      dispatch({ type: "cities/deleted", payload: data });
    } catch (error) {
      dispatch({ type: "rejected" });
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities: state.cities,
        isLoading: state.isLoading,
        getCity,
        currentCity: state.currentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("useCities used outside CitiesProvider");
  return {
    cities: context.cities,
    isLoading: context.isLoading,
    getCity: context.getCity,
    currentCity: context.currentCity,
    createCity: context.createCity,
    deleteCity: context.deleteCity,
  };
}
export { CitiesProvider, useCities };
