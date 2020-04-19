import React, { useState, useEffect, useContext } from "react";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import GlobalContext from "../utils/GlobalState";
import API from "../utils/API";

const Saved = (props) => {
  // need to check for saved list in case someone goes
  // directly to the /saved address

  const globalState = useContext(GlobalContext);

  // const { savedList, savedLoaded, savedCount } = useContext(GlobalContext);

  // const [globalState, setGlobalState] = useState({});

  // useEffect(() => {
  //   API.getSavedBooks()
  //     .then((response) => {
  //       console.log("Get getSavedBooks call: ", response.data);
  //       setGlobalState({
  //         ...globalState,
  //         savedCount: response.data.length,
  //         savedList: response.data,
  //       });
  //       console.log("Books in state: ", globalState.savedList);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
