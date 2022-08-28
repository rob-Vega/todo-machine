import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = event => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <input
      className='TodoSearch'
      placeholder='Busca un TODO'
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
