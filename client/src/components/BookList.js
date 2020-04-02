import React from "react";
import BookCard from "./BookCard";

const BookList = ({ title }) => {
  return (
    <div className="card shadow-lg mt-4">
      <div className="card-header text-left">{title}</div>
      <div className="card-body">
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default BookList;
