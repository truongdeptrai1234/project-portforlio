import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending } = useMutation({
    mutationFn: updateBooking,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      toast.success(`Guest checked in #${data.id} successfully`);
      navigate("/");
    },
    onError: () => toast.error("Failed to check in guest"),
  });

  return { checkin, isPending };
}
