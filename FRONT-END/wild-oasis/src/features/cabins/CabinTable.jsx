import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import { useCabin } from "./useCabin";
import Table from "../../ui/Table";

function CabinTable() {
  const { cabins, isPending, error } = useCabin();
  if (isPending) return <Spinner></Spinner>;
  return (
    <Table role="table" columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={(cb) => (
          <Table.Row>
            <CabinRow key={cb.id} item={cb} />
          </Table.Row>
        )}
      />
    </Table>
  );
}
export default CabinTable;
