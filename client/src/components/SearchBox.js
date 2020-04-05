import React, { Component } from "react";

const SearchBox = ({ searchValue, searchChange, searchBtn }) => {
  return (
    <div className="card shadow-lg mt-3">
      <div className="card-header text-left">Book Search</div>
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
