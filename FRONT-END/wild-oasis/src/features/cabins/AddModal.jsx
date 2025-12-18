import { useState } from "react";
import { Modal } from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        sizes="medium"
        variations="primary"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        Add cabin
      </Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen((prev) => !prev)}>
          <CreateCabinForm />
        </Modal>
      )}
    </>
  );
}

export default AddModal;
