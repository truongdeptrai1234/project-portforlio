import styled from "styled-components";
import { format, isToday } from "date-fns";

import Tag from "../../ui/Tag";
import Table from "../../ui/Table";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEllipsisVertical,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Menu from "../../ui/Menus";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const { checkout } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();
  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row id={bookingId}>
      <Cabin>{cabinName}</Cabin>

      <Stacked>
        <span>{guestName}</span>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </Stacked>

      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      <Amount>{formatCurrency(totalPrice)}</Amount>

      <Menu.Toggle itemId={bookingId}>
        <HiEllipsisVertical />
      </Menu.Toggle>
      <Menu.List itemId={bookingId}>
        <Menu.Button
          icon={<HiEye />}
          onClick={(bookingId) => navigate(`/bookings/${bookingId}`)}
        >
          View detail
        </Menu.Button>
        {status === "unconfirmed" && (
          <Menu.Button
            icon={<HiArrowDownOnSquare />}
            onClick={(bookingId) => navigate(`/checking/${bookingId}`)}
          >
            Check in
          </Menu.Button>
        )}
        {status === "checked-in" && (
          <Menu.Button
            icon={<HiArrowUpOnSquare />}
            onClick={() =>
              checkout({ id: bookingId, obj: { status: "checked-out" } })
            }
          >
            Check out
          </Menu.Button>
        )}

        <Modal.Open name="booking-delete">
          <Menu.Button icon={<HiTrash />}>Delete</Menu.Button>
        </Modal.Open>
      </Menu.List>
      <Modal.Window nameWindow="booking-delete" id={bookingId}>
        <ConfirmDelete
          resourceName="booking"
          disabled={isDeleting}
          onConfirm={() => deleteBooking(bookingId)}
        />
      </Modal.Window>
    </Table.Row>
  );
}

export default BookingRow;
