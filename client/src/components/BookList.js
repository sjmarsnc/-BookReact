import React from "react";
import BookCard from "./BookCard";

const BookList = ({ sectionTitle, books }) => {
  console.log("In BookList: ", books);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-header text-left">{sectionTitle}</div>
      <div className="card-body">
        {books.map(book => (
          <BookCard
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors[0]}
            image={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.thumbnail
                : ""
            }
            desc={book.volumeInfo.description}
            googleLink={book.volumeInfo.infoLink}
            button2={sectionTitle === "Saved Books" ? "Delete" : "Save"}
            key={book.id}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
