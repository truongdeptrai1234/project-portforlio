import BookingRow from "./BookingRow";
import Table from "../../ui/Table";

import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../ui/Pagination";
import Menu from "../../ui/Menus";
import Modal from "../../ui/Modal";

function BookingTable() {
  const [searchParams] = useSearchParams();
  const { bookings, count, isPending, error } = useBookings({
    filter: searchParams.get("filter"),
    sort: searchParams.get("sort"),
    page: +searchParams.get("page") || 1,
  });
  if (isPending) return <Spinner />;
  if (error) console.log(error); //for testing
  return (
    <Menu>
      <Modal>
        <Table itemType="booking" columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
          <Table.Header>
            <div>Cabin</div>
            <div>Guest</div>
            <div>Dates</div>
            <div>Status</div>
            <div>Amount</div>
            <div></div>
          </Table.Header>

          <Table.Body
            data={bookings}
            render={(booking) => (
              <BookingRow key={booking.id} booking={booking} />
            )}
          />

          <Table.Footer>
            <Pagination count={count} />
          </Table.Footer>
        </Table>
      </Modal>
    </Menu>
  );
}

export default BookingTable;
