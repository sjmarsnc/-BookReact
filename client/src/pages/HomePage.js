import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import SearchBox from "../components/SearchBox";
import Jumbotron from "../components/Jumbotron";
import "../components/common.css";

function HomePage() {
  return (
    <>
      <Nav />
      <Container>
        <Jumbotron />
        <Row>
          <Col size="12">
            <SearchBox />
            <BookList title="Search Results" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
