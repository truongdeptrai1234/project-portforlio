import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { logoutUser } from "../../services/apiAuth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear();
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Logout failed: " + error.message);
    },
  });

  return { logout, isLoading };
};
