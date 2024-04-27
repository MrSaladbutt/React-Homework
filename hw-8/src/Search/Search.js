import './search.css';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      className="search"
      type="text"
      placeholder="Пошук..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
