import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import { useUpdateSettings } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const { settings } = useSettings();
  const { updateSettings, isPending } = useUpdateSettings();
  const handleOnblur = (e, setting) => {
    if (+e.target.value === settings[setting]) return;
    updateSettings({ [setting]: +e.target.value });
  };
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings?.minBookingLength}
          min={1}
          disabled={isPending}
          onBlur={(e) => handleOnblur(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={settings?.maxBookingLength}
          min={1}
          disabled={isPending}
          onBlur={(e) => handleOnblur(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={settings?.maxGuestPerBooking}
          min={1}
          disabled={isPending}
          onBlur={(e) => handleOnblur(e, "maxGuestPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={settings?.breakfastPrice}
          min={0}
          disabled={isPending}
          onBlur={(e) => handleOnblur(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
