import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiDocumentDuplicate, HiTrash } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const { id, image, name, regularPrice, discount, maxCapacity, description } =
    item;

  const { deleteCabinHandler, isPending: isDeleting } = useDeleteCabin();
  const { createNewCabin: duplicatedCabin, isPending: isDuplicating } =
    useCreateCabin();
  const handleDuplicated = () => {
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
  const handleEdit = () => {
    setIsEditing(true);
  };
  return (
    <>
      <TableRow>
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Can fill up to {maxCapacity}</div>
        <Price>{formatCurrency(regularPrice)}</Price>

        <Discount>
          {discount ? formatCurrency(discount) : <span>&mdash;&mdash;</span>}
        </Discount>

        <div>
          <button onClick={handleDuplicated} disabled={isDuplicating}>
            <HiDocumentDuplicate />
          </button>
          <Modal>
            <Modal.Open name="cabin-edit">
              <Button size="small" onClick={handleEdit}>
                <MdEdit />
              </Button>
            </Modal.Open>

            <Modal.Open name="cabin-delete">
              <Button size="small">
                <HiTrash />
              </Button>
            </Modal.Open>

            <Modal.Window nameWindow="cabin-edit">
              <CreateCabinForm editOption={isEditing} editItemData={item} />
            </Modal.Window>

            <Modal.Window nameWindow="cabin-delete">
              <ConfirmDelete
                disabled={isDeleting}
                resourceName={`'${name}' cabin`}
                onConfirm={deleteCabinHandler.bind(null,id)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}
export default CabinRow;
