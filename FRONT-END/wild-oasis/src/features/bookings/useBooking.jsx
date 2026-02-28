import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

export const useBooking = (bookingId) => {
  return useQuery({
    queryKey: ["bookings", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: 2,
  });
};
