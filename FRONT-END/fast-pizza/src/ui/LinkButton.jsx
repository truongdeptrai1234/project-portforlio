import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, path }) {
  const navigate = useNavigate();
  const className =
    'text-sm font-semibold text-blue-500 hover:text-blue-600 hover:underline';
  if (path === 'back')
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  return (
    <Link to={path} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
