import { Link } from 'react-router-dom';

function Button({ children, disabled, path, type, onClick }) {
  const base =
    'inline-block cursor-pointer rounded-full bg-yellow-400 text-base font-semibold tracking-wide uppercase transition-colors duration-300 hover:bg-yellow-300 focus:ring focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-stone-500';
  const style = {
    primary: base + ' px-5 py-3 md:px-6 md:py-3.5',
    small: base + ' px-4 py-2 md:px-4 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-sm',
    secondary:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };
  if (path)
    return (
      <Link to={path} className={style[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

export default Button;
