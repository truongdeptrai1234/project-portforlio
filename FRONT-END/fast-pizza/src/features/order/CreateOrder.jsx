/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotalPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { store } from '../../store';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const {
    userName,
    error: errorAddress,
    status,
    position,
    userAddress,
  } = useSelector((state) => state.user);

  const totalPrice = useSelector(getTotalPrice);
  const navigation = useNavigation();
  const createOrderData = useActionData();
  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const dispatch = useDispatch();

  return (
    <div className="px-5 py-4">
      <h2 className="mb-8 text-xl font-semibold md:text-center">
        Ready to order? Let&apos;s go!
      </h2>
      <Form method="post" action="/order/new">
        <div className="mb-5 flex flex-col justify-center gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow md:w-[400px] md:grow-0"
            type="text"
            name="customer"
            required
            defaultValue={userName}
          />
        </div>

        <div className="mb-5 flex flex-col justify-center gap-2 sm:flex-row sm:items-center sm:gap-2">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow md:w-[400px] md:grow-0">
            <input className="input w-full" type="tel" name="phone" required />
            {createOrderData?.error ? (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-sm text-red-700">
                {createOrderData.error}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mb-5 flex flex-col justify-center gap-2 sm:flex-row sm:items-center md:mb-7">
          <label className="sm:basis-40">Address</label>
          <div className="relative grow md:w-[400px] md:grow-0">
            <input
              className="input w-full"
              type="text"
              name="address"
              defaultValue={userAddress}
              required
            />
            {!!errorAddress && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-sm text-red-700">
                {errorAddress}
              </p>
            )}

            {!position.latitude && !position.logitude && (
              <span className="absolute top-0.5 right-1 sm:top-1 sm:right-2">
                <Button
                  type="small"
                  onClick={async (e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                  disabled={status === 'pending'}
                >
                  Get position
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-12 flex items-center gap-3 md:mx-auto md:w-8/10 md:px-3 lg:w-7/10 lg:px-3.5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 accent-yellow-400 md:h-6 lg:w-6"
          />
          <label className="text-sm font-medium sm:basis-[400px]">
            Want to yo give your order priority?
          </label>
        </div>
        <input name="cart" defaultValue={JSON.stringify(cart)} hidden />
        <div className="md:flex md:justify-center md:px-3.5">
          <Button disabled={navigation.state === 'submitting'} type="primary">
            {navigation.state === 'submitting'
              ? 'Ordering...'
              : `Order now from ${formatCurrency(totalPrice + priorityPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const res = await request.formData();
  const data = Object.fromEntries(res);
  const cart = JSON.parse(data.cart);
  if (!isValidPhone(data.phone)) return { error: 'Invalid phone number !' };

  const orderData = {
    ...data,
    cart,
    priority: data.priority || false,
  };
  if (cart.length === 0) return redirect('/cart');
  //everything ok call api then redirect
  const dataRes = await createOrder(orderData);
  //not overuse
  store.dispatch(clearCart());

  return redirect(`/order/${dataRes.id}`);
}
export default CreateOrder;
