import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { MAX_ITEM_PER_PAGE } from "../../utils/constants";

export function useBookings({ filter, sort, page }) {
  const queryClient = useQueryClient();
  const { data, isPending, error } = useQuery({
    queryKey: ["bookings", filter, sort, page],
    queryFn: () => getBookings({ filter, sort, page }),
    placeholderData: keepPreviousData,
  });
  //PRE-FETCH
  const pageCount = Math.ceil(data?.count / MAX_ITEM_PER_PAGE);
  page < pageCount &&
    queryClient.prefetchQuery({
      queryKey: ["bookings", null, null, page + 1],
      queryFn: () => getBookings({ page: page + 1 }),
    });
  return { isPending, error, bookings: data?.data, count: data?.count };
}
