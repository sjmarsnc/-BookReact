import React from "react";
import { Container, Col, Row } from "./Grid";

const SearchBox = (props) => {
  console.log("In SearchBox, props: ", props);
  const { searchValue, searchChange, searchBtn } = props;
  return (
    <div className="card shadow-lg mt-3">
      <div className="card-header text-left mb-2">Book Search</div>
      <div className="alert alert-danger d-none">
        Please enter a search string before attempting to search!
      </div>
      <input
        className="m-2"
        name="searchValue"
        type="text"
        value={searchValue}
        placeholder="String to search for"
        onChange={searchChange}
      />

      <div className="row w-100 d-flex">
        <button
          name="searchBtn"
          className="btn btn-info p-1 m-1 ml-5 justify-right"
          placeholder="String to search for"
          onClick={searchBtn}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
