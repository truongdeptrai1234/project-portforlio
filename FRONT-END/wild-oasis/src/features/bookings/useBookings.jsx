import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings({ filter, sort }) {
  const {
    data: bookings,
    isPending,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sort],
    queryFn: () => getBookings(filter, sort),
  });

  return { isPending, error, bookings };
}
