import React from "react";
import Nav from "../components/Nav";
import BookDetail from "../components/BookDetail";
import { Col, Row, Container } from "../components/Grid";
import "../components/common.css";

const Detail = id => {
  return (
    <>
      <Nav />
      <Container fluid="1">
        <Row>
          <Col size="12 md-9">
            <h1>Show detail on one book</h1>
            <BookDetail />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detail;
