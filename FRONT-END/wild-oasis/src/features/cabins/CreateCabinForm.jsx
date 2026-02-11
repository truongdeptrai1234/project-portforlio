import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ editItemData = {}, onClose }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editItemData.id
      ? {
          ...editItemData,
        }
      : {},
  });
  const { errors } = formState;

  const { createNewCabin, isPending: isCreating } = useCreateCabin();

  const { updateCabin, isPending: isEditing } = useEditCabin();

  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    if (!data?.image[0]?.name && editItemData.id) {
      data = { ...data, image: editItemData.image };
    }
    if (editItemData.id)
      updateCabin(data, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
    if (!editItemData.id)
      createNewCabin(data, {
        onSuccess: () => {
          reset();
          onClose();
        },
      });
  }
  function onError() {
    console.log(errors);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={`${onClose ? "modal" : "regular"}`}
    >
      <FormRow label="Cabin name" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity can not below 1" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Regular Price" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Regular price can not below 1" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Discount" errors={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              +value <= +getValues("regularPrice") ||
              "Discount can not exceed regular price",
            min: { value: 0, message: "Discount can not below 0" },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        errors={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Cabin photo" errors={errors?.image?.message}>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          {...register("image", {
            required: editItemData.id ? false : "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onClose?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {editItemData.id ? "Edit cabin" : "Add cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
