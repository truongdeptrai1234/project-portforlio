import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function NotFound() {
  const error = useRouteError();

  return (
    <div className="px-4 py-3">
      <h1 className="mt-3 text-xl font-semibold">Something went wrong 😢</h1>
      <p className="mt-2 text-sm">{error.data || error.message}</p>
      <LinkButton path="back">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
