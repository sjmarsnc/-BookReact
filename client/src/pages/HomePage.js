import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import SearchBox from "../components/SearchBox";
import Jumbotron from "../components/Jumbotron";
import "../components/common.css";
import API from "../utils/API";

class HomePage extends Component {
  state = {
    searchValue: "",
    books: [],
    savedBooks: []
  };

  handleInputChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value,
      books: []
    });
  };

  handleSearchBtn = event => {
    console.log("Search button pushed: ", this.state.searchValue);
    API.searchBooks(this.state.searchValue)
      .then(response => {
        this.setState({ books: response });
        console.log("Books in state: ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {}

  render() {
    return (
      <>
        <Nav enableSaved={this.state.savedBooks.length === 0 ? false : true} />
        <Container>
          <Jumbotron />
          <Row>
            <Col size="12">
              <SearchBox
                searchValue={this.state.searchValue}
                searchChange={this.handleInputChange}
                searchBtn={this.handleSearchBtn}
              />
              {this.state.books.length === 0 ? (
                <div></div>
              ) : (
                <BookList
                  sectionTitle="Search Results"
                  books={this.state.books}
                />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default HomePage;
