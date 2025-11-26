import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-4">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{props.title}</h5>
        <span>{props.date}</span>
      </div>
      <img
        src={props.image}
        className="card-img-top"
        alt={props.alt}
        style={{ height: "600px", objectFit: "cover" }}
      />
      <div className="card-body">
        <div className="d-flex align-items-center gap-2">
          <i className="fa-regular fa-heart"></i>
          <p className="mb-0"><strong>{props.likes} Likes</strong></p>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-regular fa-paper-plane"></i>
        </div>
        <p className="text-muted">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;