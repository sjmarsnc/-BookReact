import React from "react";
import BookCard from "./BookCard";

const BookList = ({ sectionTitle, books }) => {
  console.log("In BookList: ", books.data);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-header text-left">{sectionTitle}</div>
      <div className="card-body">
        {books.data.map(book => (
          <BookCard
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors.join(", ")}
            image={book.volumeInfo.imageLinks.thumbnail}
            desc={book.volumeInfo.description}
            googleLink={book.volumeInfo.infoLink}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;
