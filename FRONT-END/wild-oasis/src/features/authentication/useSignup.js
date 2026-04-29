import { useMutation } from "@tanstack/react-query";
import { singup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignup() {
  const { mutate: signupUser, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () =>
      toast.success(
        "Sign up new user successfull, please check email to activate new user",
      ),
  });
  return { signupUser, isPending };
}

export default useSignup;
