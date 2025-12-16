import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export function useCabin() {
  const {
    data: cabins,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  return { cabins, isPending, error };
}
