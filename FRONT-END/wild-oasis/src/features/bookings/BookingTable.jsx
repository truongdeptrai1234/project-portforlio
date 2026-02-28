import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import { useBookings } from "./useBookings";
import { useSearchParams } from "react-router-dom";

function BookingTable() {
  const [searchParams] = useSearchParams();
  const { bookings, isPending, error } = useBookings({
    filter: searchParams.get("filter"),
    sort: searchParams.get("sort"),
  });
  if (isPending) return <Spinner />;
  if (error) console.log(error);
  return (
    <Menus>
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
      </Table>
    </Menus>
  );
}

export default BookingTable;
