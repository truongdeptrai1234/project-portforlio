import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseQuantityItem,
  getCurrentCartQuantity,
  increaseQuantityItem,
} from './cartSlice';

function UpdateQuantityItem({ pizzaId }) {
  const dispatch = useDispatch();
  const currenQuantity = useSelector(getCurrentCartQuantity(pizzaId));
  return (
    <div className="flex items-center gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseQuantityItem(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-semibold">{currenQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseQuantityItem(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateQuantityItem;
