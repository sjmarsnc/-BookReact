import React, { useEffect, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import BookList from "../components/BookList";
import SearchBox from "../components/SearchBox";
import GlobalContext from "../utils/GlobalState";
import Jumbotron from "../components/Jumbotron";
import "../components/common.css";

const HomePage = (props) => {
  const globalState = useContext(GlobalContext);

  return (
    <>

      <GlobalContext.Provider value={globalState}>
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
