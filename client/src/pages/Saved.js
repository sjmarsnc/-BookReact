import React from "react";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

function Saved() {
  return (
    <>
      <Nav />
      <Container>
        <Jumbotron />
        <Row>
          <Col size="12">
            <BookList sectionTitle="Saved Books" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Saved;
