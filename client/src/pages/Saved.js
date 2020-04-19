import React, { useEffect, useContext } from "react";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import GlobalContext from "../utils/GlobalState";

const Saved = (props) => {
  // need to check for saved list in case someone goes
  // directly to the /saved address

  const globalState = useContext(GlobalContext);

  useEffect(() => { },
    [globalState]);

  return (
    <GlobalContext.Provider value={globalState}>
      <Container>
        <Jumbotron />
        <Row>
          <Col size="12">
            <BookList
              books={globalState.savedList}
              sectionTitle="Saved Books"
              button2onClick={props.handleDeleteClick}
              viewButtonOnClick={props.handleViewClick} />
          </Col>
        </Row>
      </Container>
    </GlobalContext.Provider>
  );
};

export default Saved;
