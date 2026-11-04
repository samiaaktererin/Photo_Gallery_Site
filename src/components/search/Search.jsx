export const Search = ({ search, setSearch }) => {
  return (
    <div className="search-box">
      <input
        className="searchByTitle"
        type="search"
        name="search"
        placeholder="Search photos by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
