import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="patch">
      <Button type="small" disabled={fetcher.state === 'submitting'}>
        Priority
      </Button>
    </fetcher.Form>
  );
}
export async function action({ params }) {
  return await updateOrder(params.orderId, { priority: true });
}
export default UpdateOrder;
