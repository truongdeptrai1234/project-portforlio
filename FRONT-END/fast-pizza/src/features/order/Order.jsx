/* eslint-disable react-refresh/only-export-components */
// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import OrderItem from './OrderItem';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import { getOrder } from '../../services/apiRestaurant';
import LinkButton from '../../ui/LinkButton';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = useLoaderData();
  const fetcher = useFetcher();
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);
  return (
    <div className="space-y-8 px-5 py-4">
      <LinkButton path="/menu">&larr; Back to menu</LinkButton>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-red-500 px-2 py-1 text-xs font-bold tracking-wide text-stone-100 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-bold tracking-wide text-stone-100 uppercase">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-4 py-4 text-stone-600">
        <p className="text-sm">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs font-medium">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <ul className="divide-y divide-stone-200 border-t border-b border-stone-200">
        {cart.map((c) => (
          <OrderItem
            key={c.pizzaId}
            item={c}
            isLoadingIngredients={fetcher.state}
            ingredients={
              fetcher?.data
                ?.find((item) => item.id === c.pizzaId)
                ?.ingredients.join(', ') ?? []
            }
          />
        ))}
      </ul>
      <div className="space-y-2 bg-stone-200 px-4 py-4 text-sm text-stone-600">
        <p className="font-medium">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}
export async function loader({ params }) {
  return await getOrder(params.orderId);
}
export default Order;
