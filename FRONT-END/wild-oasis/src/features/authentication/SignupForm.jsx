import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";
import { useState } from "react";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();
  const { signupUser, isPending } = useSignup();

  const [passVisible, setPassVisible] = useState(false);
  const [passConfVisible, setPassConfVisible] = useState(false);

  function submitHandler(data) {
    signupUser(data, { onSuccess: () => reset() });
  }
  return (
    <Form onSubmit={handleSubmit(submitHandler)}>
      <FormRow label="Full name" errors={errors.fullName?.message}>
        <Input
          disabled={isPending}
          {...register("fullName", {
            required: "this field must not empty",
            pattern: {
              value: /^[\p{L}0-9 ]+$/u,
              message: "Contain special characters",
            },
          })}
          type="text"
          id="fullName"
        />
      </FormRow>

      <FormRow label="Email address" errors={errors.email?.message}>
        <Input
          disabled={isPending}
          {...register("email", {
            required: "this field must not empty",
            validate: (value) =>
              /\S+@\S+\.\S+/.test(value) || "Invalid email format",
          })}
          type="email"
          id="email"
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        errors={errors.password?.message}
        toggleOnclick={setPassVisible}
      >
        <Input
          disabled={isPending}
          {...register("password", { required: "this field must not empty" })}
          type={passVisible ? "text" : "password"}
          id="password"
        />
      </FormRow>

      <FormRow
        label="Repeat password"
        errors={errors.passwordConfirm?.message}
        toggleOnclick={setPassConfVisible}
      >
        <Input
          disabled={isPending}
          {...register("passwordConfirm", {
            required: "this field must not empty",
            validate: (value) =>
              value === getValues("password") || "Not matching password ",
          })}
          type={passConfVisible ? "text" : "password"}
          id="passwordConfirm"
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <>
          <Button
            disabled={isPending}
            variation="secondary"
            onClick={() => reset()}
          >
            Cancel
          </Button>
          <Button disabled={isPending}>Create new user</Button>
        </>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
