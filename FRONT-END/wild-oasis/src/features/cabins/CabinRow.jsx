import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { HiEllipsisVertical } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menu from "../../ui/Menus";

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
  const { id, image, name, regularPrice, discount, maxCapacity } = item;

  const { deleteCabinHandler, isPending: isDeleting } = useDeleteCabin();

  return (
    <>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Can fill up to {maxCapacity}</div>
      <Price>{formatCurrency(regularPrice)}</Price>

      <Discount>
        {discount ? formatCurrency(discount) : <span>&mdash;&mdash;</span>}
      </Discount>
      <Menu.Toggle itemId={id}>
        <HiEllipsisVertical />
      </Menu.Toggle>
      {/* modal popup for menu cabin menu option */}
      <div>
        <Modal.Window nameWindow="cabin-edit" id={id}>
          <CreateCabinForm editItemData={item} />
        </Modal.Window>
        <Modal.Window nameWindow="cabin-delete" id={id}>
          <ConfirmDelete
            disabled={isDeleting}
            resourceName={`'${name}' cabin`}
            onConfirm={deleteCabinHandler.bind(null, id)}
          />
        </Modal.Window>
      </div>
    </>
  );
}
export default CabinRow;
