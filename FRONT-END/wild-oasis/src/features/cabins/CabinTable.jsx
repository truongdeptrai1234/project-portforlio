import CabinRow from "./CabinRow";
import Spinner from "../../ui/Spinner";
import { useCabin } from "./useCabin";
import Table from "../../ui/Table";
import Menu from "../../ui/Menus";
import { MdEdit } from "react-icons/md";
import Modal from "../../ui/Modal";
import { HiDocumentDuplicate, HiTrash } from "react-icons/hi2";
import { useCreateCabin } from "./useCreateCabin";

function CabinTable() {
  const { cabins, isPending, error } = useCabin();
  const { createNewCabin: duplicatedCabin, isPending: isDuplicating } =
    useCreateCabin();

  const handleDuplicated = (id) => {
    const { image, name, regularPrice, discount, maxCapacity, description } =
      cabins.find((i) => i.id === id);
    const dupItem = {
      image,
      name,
      regularPrice,
      discount,
      maxCapacity,
      description,
    };
    duplicatedCabin(dupItem);
  };
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
      <Menu>
        <Modal>
          <Table.Body
            data={cabins}
            render={(cb) => (
              <Table.Row key={cb.id} id={cb.id}>
                <CabinRow item={cb} />
              </Table.Row>
            )}
          />
          <Menu.List>
            <Modal.Open name="cabin-edit">
              <Menu.Button icon={<MdEdit />}>Edit cabin</Menu.Button>
            </Modal.Open>
            <Modal.Open name="cabin-delete">
              <Menu.Button icon={<HiTrash />}>Delete cabin</Menu.Button>
            </Modal.Open>
            <Menu.Button
              icon={<HiDocumentDuplicate />}
              disabled={isDuplicating}
              onClick={handleDuplicated}
            >
              Duplicate cabin
            </Menu.Button>
          </Menu.List>
        </Modal>
      </Menu>
    </Table>
  );
}
export default CabinTable;
