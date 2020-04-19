import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import SearchBox from "../components/SearchBox";
import GlobalContext from "../utils/GlobalState";
import Jumbotron from "../components/Jumbotron";
import "../components/common.css";
import API from "../utils/API";

const HomePage = (props) => {
  const globalState = useContext(GlobalContext);

  return (
    <>

      <GlobalContext.Provider value={globalState}>
        {console.log("before the Container component ", globalState.searchList)}
        <Container>
          <Jumbotron />
          <Row>
            <Col size="12">
              <SearchBox
                searchChange={props.handleSearchChange}
                searchBtn={props.handleSearchBtn}
              />
              <BookList
                sectionTitle="Search Results"
                button2onClick={props.handleSaveClick}
                viewButtonOnClick={props.handleViewClick}
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
