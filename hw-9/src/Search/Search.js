import './search.css';

const Search = ({ searchTerm, setSearchTerm }) => {
  const searchHandler = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      className="search"
      type="text"
      placeholder="Пошук..."
      value={searchTerm}
      onChange={searchHandler}
    />
  );
};

export default Search;
