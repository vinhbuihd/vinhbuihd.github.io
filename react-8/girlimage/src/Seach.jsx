const Search = (props) => {
  return (
    <div className="search-input text-center">
      <input
        type="text"
        placeholder="Seach"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Search;
