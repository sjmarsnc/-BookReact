import React from "react";

const SearchBox = (props) => {
  console.log("In SearchBox, props: ", props);
  const { searchValue, searchChange, searchBtn } = props;
  return (
    <div className="card shadow-lg mt-3">
      <div className="card-header text-left">Book Search</div>
      <div className="alert alert-danger d-none">
        Please enter a search string before attempting to search!
      </div>
      <input
        name="searchValue"
        type="text"
        value={searchValue}
        placeholder="String to search for"
        onChange={searchChange}
      />
      <button
        name="searchBtn"
        className="justify-content-right"
        placeholder="String to search for"
        onClick={searchBtn}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
