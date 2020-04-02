import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./bookCard.css";

const BookCard = () => {
  return (
    <div className="card">
      <div className="card-header d-flex">
        <span className="title text-left">Title goes here</span>
        <span className="justify-content-right">
          <button>View</button>
          <button>Save</button>
        </span>
      </div>
      <div className="card-body d-flex">
        <span className="justify-content-left">
          <img src="http://via.placeholder.com/150x200.png" />
        </span>

        <span className="justify-content-right ml-4 text-left">
          Book description goes here Et ad sint sit excepteur. Nisi aute velit
          commodo occaecat consectetur ut laborum. Adipisicing eiusmod enim
          Lorem nulla exercitation cupidatat fugiat veniam. Mollit dolor magna
          esse culpa aute labore labore Lorem. Dolore id ullamco officia
          proident id laboris id sit nostrud fugiat occaecat esse. Ipsum mollit
          anim occaecat amet ad dolor occaecat et in eu anim. Commodo dolor elit
          dolor velit do anim laborum proident nostrud. Excepteur minim sunt
          occaecat elit proident est. Ad aute dolor reprehenderit qui ea
          adipisicing anim amet pariatur laborum ad sunt ipsum duis. Eiusmod
          consequat amet consectetur non Lorem nulla. Ea laboris sit laborum
          quis adipisicing mollit ut. Eu cupidatat cillum pariatur nulla veniam
          deserunt consectetur in laborum.
        </span>
      </div>
    </div>
  );
};

export default BookCard;
