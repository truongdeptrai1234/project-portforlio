import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleSearchOrder = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  };
  return (
    <form onSubmit={handleSearchOrder}>
      <input
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-stone-500 transition-all duration-300 placeholder:text-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:ring-inset sm:w-64 sm:focus:w-72"
        type="text"
        placeholder="Search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
