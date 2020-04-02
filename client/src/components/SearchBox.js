import React from "react";

const SearchBox = () => {
  return (
    <div className="card shadow-lg">
      <div className="card-header">Book Search</div>
      <input
        name="searchValue"
        type="textarea"
        placeholder="String to search for"
      />
      <button
        name="searchBtn"
        className="justify-content-right"
        placeholder="String to search for"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
