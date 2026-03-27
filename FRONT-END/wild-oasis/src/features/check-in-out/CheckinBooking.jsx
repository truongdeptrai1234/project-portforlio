/* eslint-disable react-hooks/set-state-in-effect */
import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Checkbox from "../../ui/Checkbox";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import useCheckin from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import CheckoutButton from "./CheckoutButton";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const moveBack = useMoveBack();
  const [paidCheck, setPaid] = useState(false);
  const [breakfastCheck, setBreakfast] = useState(false);
  const { bookingId: bookingParamID } = useParams();
  const { data: booking, isPending } = useBooking(+bookingParamID);
  const { checkin, isPending: isCheckin } = useCheckin();
  const { settings, isLoading: loadingSettings } = useSettings();

  useEffect(() => {
    if (booking && booking.hasBreakfast) setBreakfast(booking.hasBreakfast);
    if (booking && booking.isPaid) setPaid(booking.isPaid);
  }, [booking]);
  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
    cabinPrice,
  } = booking || {};
  const optionalBreakfastPrice =
    settings?.breakfastPrice * numGuests * numNights;
  function handleCheckin() {
    checkin({
      id: bookingId,
      obj: {
        isPaid: paidCheck,
        status: "checked-in",
        hasBreakfast: breakfastCheck,
        extrasPrice: optionalBreakfastPrice,
        totalPrice: cabinPrice + optionalBreakfastPrice,
      },
    });
  }
  if (isPending || loadingSettings) return <Spinner />;
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          checked={breakfastCheck}
          onChange={() => setBreakfast((prev) => !prev)}
          disabled={isPaid}
        >
          Add breakfast
        </Checkbox>
      </Box>
      <Box>
        <Checkbox
          checked={paidCheck || isPaid}
          disabled={isPaid}
          onChange={() => setPaid((prev) => !prev)}
        >
          Comfirmed paying total amount of{" "}
          {breakfastCheck
            ? formatCurrency(cabinPrice + optionalBreakfastPrice)
            : formatCurrency(cabinPrice)}{" "}
          ({formatCurrency(cabinPrice)} cabin{" "}
          {breakfastCheck &&
            `+ ${formatCurrency(optionalBreakfastPrice)} breakfast`}
          )
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={isCheckin || !paidCheck}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
