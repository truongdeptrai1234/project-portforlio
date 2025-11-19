import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-stone-600">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="mt-2 text-sm font-semibold tracking-wide text-stone-400 capitalize italic">
        {isLoadingIngredients === 'loading' ? 'Loading' : ingredients}
      </p>
    </li>
  );
}

export default OrderItem;
