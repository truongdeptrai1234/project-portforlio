import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateQuantityItem from './UpdateQuantityItem';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-2 text-sm sm:mb-0">
        <strong>{quantity}&times;</strong> {name}
      </p>
      <div className="flex flex-wrap items-center gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityItem pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
