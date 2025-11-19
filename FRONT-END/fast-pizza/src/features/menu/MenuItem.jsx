import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, getCurrentCartQuantity } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateQuantityItem from '../cart/UpdateQuantityItem';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currenQuantity = useSelector(getCurrentCartQuantity(id));

  const dispatch = useDispatch();

  const handleAddItem = () => {
    const pizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addCartItem(pizza));
  };
  return (
    <li className="flex gap-4 px-2 py-2 md:py-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? ' grayscale ' : ''}`}
      />
      <div className="flex grow flex-col gap-0.5 pt-0.5">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-stone-500 capitalize sm:text-sm">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-xs text-stone-500 sm:text-sm">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium text-stone-500 uppercase">
              Sold out
            </p>
          )}
          {currenQuantity > 0 ? (
            <div className="flex flex-wrap items-center gap-2 sm:gap-5">
              <UpdateQuantityItem pizzaId={id} />
              <DeleteItem pizzaId={id} />
            </div>
          ) : (
            <Button type="small" onClick={handleAddItem} disabled={soldOut}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
