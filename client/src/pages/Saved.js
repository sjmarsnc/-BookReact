import React from "react";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import { Col, Row, Container } from "../components/Grid";

function Saved() {
  return (
    <>
      <Nav />
      <Container fluid="1">
        <Row>
          <Col size="12">
            <BookList title="Saved Books" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Saved;
