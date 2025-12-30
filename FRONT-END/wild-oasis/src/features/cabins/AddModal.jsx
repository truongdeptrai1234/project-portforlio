import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddModal() {
  return (
    <Modal>
      <Modal.Open name="cabin-form">
        <Button>Add cabin</Button>
      </Modal.Open>
      <Modal.Window nameWindow="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddModal;
