import React, { Component } from "react";
import Nav from "../components/Nav";
import BookList from "../components/BookList";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class Saved extends Component {
  // need to check for saved list in case someone goes
  // directly to the /saved address

  state = {
    savedList: [],
    savedCount: 0
  };

  componentDidMount() {
    API.getSavedBooks()
      .then(savedList => {
        this.setState({ savedList });
        this.setState({ savedCount: savedList.length });
        console.log("Books in state: ", this.state.savedList);
      })
      .catch(err => console.log(err));
    this.setState({
      savedCount: 1,
      savedList: [
        {
          kind: "books#volume",
          id: "pIs9Em38dAoC",
          etag: "u2vjS0R01+k",
          selfLink: "https://www.googleapis.com/books/v1/volumes/pIs9Em38dAoC",
          volumeInfo: {
            title: "The Play of Daniel Keyes' Flowers for Algernon",
            authors: ["Bert Coules", "Daniel Keyes"],
            publisher: "Heinemann",
            publishedDate: "1993",
            description:
              "The Heinemann Plays series offers contemporary drama and classic plays in durable classroom editions. Many have large casts and an equal mix of boy and girl parts. This play is a dramatization of Daniel Keyes's story about a retarded adult who desperately wants to be able to read and write.",
            industryIdentifiers: [
              {
                type: "ISBN_10",
                identifier: "0435232932"
              },
              {
                type: "ISBN_13",
                identifier: "9780435232931"
              }
            ],
            readingModes: {
              text: false,
              image: true
            },
            pageCount: 128,
            printType: "BOOK",
            categories: ["English drama"],
            averageRating: 4.5,
            ratingsCount: 3,
            maturityRating: "NOT_MATURE",
            allowAnonLogging: false,
            contentVersion: "preview-1.0.0",
            imageLinks: {
              smallThumbnail:
                "http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
              thumbnail:
                "http://books.google.com/books/content?id=pIs9Em38dAoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            language: "en",
            previewLink:
              "http://books.google.com/books?id=pIs9Em38dAoC&printsec=frontcover&dq=Algernon&hl=&cd=1&source=gbs_api",
            infoLink:
              "http://books.google.com/books?id=pIs9Em38dAoC&dq=Algernon&hl=&source=gbs_api",
            canonicalVolumeLink:
              "https://books.google.com/books/about/The_Play_of_Daniel_Keyes_Flowers_for_Alg.html?hl=&id=pIs9Em38dAoC"
          }
        }
      ]
    });
    console.log("State: ", this.state);
  }

  render() {
    return (
      <>
        <Nav />
        <Container>
          <Jumbotron />
          <Row>
            <Col size="12">
              <BookList
                sectionTitle="Saved Books"
                books={this.state.savedList}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Saved;
