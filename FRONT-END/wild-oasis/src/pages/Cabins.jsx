import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddModal from "../features/cabins/AddModal";
import CabinTableOperator from "../features/cabins/CabinTableOperator";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperator />
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <Row type="horizontal">
        <AddModal />
      </Row>
    </>
  );
}

export default Cabins;
