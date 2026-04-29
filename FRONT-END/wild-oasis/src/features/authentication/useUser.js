import { getCurrentUser } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

function useUser() {
  const { data: user, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60 * 5,
  });

  return { user, isPending };
}

export default useUser;
