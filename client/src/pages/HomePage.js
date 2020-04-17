import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import SearchBox from "../components/SearchBox";
import GlobalContext from "../utils/GlobalState";
import Jumbotron from "../components/Jumbotron";
import "../components/common.css";
import API from "../utils/API";

const HomePage = () => {
  const [globalState, setGlobalState] = useState({
    searchValue: "",
    searchList: [],
    savedLoaded: false,
    savedCount: 0,
    savedList: [],
  });

  const handleSearchChange = (event) => {
    // search field changes, clear the search result list
    console.log("In handleSearchChange:", event.target.value);
    setGlobalState({
      ...globalState,
      searchValue: event.target.value,
    });
  };

  const handleSearchBtn = (event) => {
    console.log("Search button pushed: ", globalState.searchValue);
    API.searchBooks(globalState.searchValue)
      .then((response) => {
        console.log("response from search: ", response.data);
        setGlobalState({
          ...globalState,
          searchList: response.data,
        });
        console.log("Searched books: ", globalState.searchList);
      })
      .catch((err) => console.log(err));
  };

  const handleViewClick = (link) => {
    console.log("View button pushed: ", link);
    window.open(link, "_blank");
  };

  const handleSaveClick = (id) => {
    console.log("Save button pushed: ", id);
    var newbook = globalState.searchList.find((book) => book.googleId === id);
    console.log("newbook: ", newbook);
    API.saveBook(newbook)
      .then((response) => {
        setGlobalState({
          ...globalState,
          savedList: [...globalState.savedList, newbook],
          savedCount: globalState.savedCount + 1,
        });
      })
      .catch((err) => console.log(err));
    console.log("Saved books: ", globalState.savedList);
  };

  const handleDeleteClick = (id) => {};

  // useEffect(   {
  //   if (!globalState.savedLoaded) {
  //      API.getSavedBooks()
  //        .then( response => {
  //        } );
  //   }, [])
  // get saved list and store in state to enable the search bar
  // }

  return (
    <>
      <Nav enableSaved={globalState.savedCount === 0 ? false : true} />
      <GlobalContext.Provider value={globalState}>
        {console.log("before the Container component ", globalState.searchList)}
        <Container>
          <Jumbotron />
          <Row>
            <Col size="12">
              <SearchBox
                searchChange={handleSearchChange}
                searchBtn={handleSearchBtn}
              />
              <BookList
                sectionTitle="Search Results"
                button2onClick={handleSaveClick}
                viewButtonOnClick={handleViewClick}
                books={globalState.searchList}
              />
            </Col>
          </Row>
        </Container>
      </GlobalContext.Provider>
    </>
  );
};

export default HomePage;
