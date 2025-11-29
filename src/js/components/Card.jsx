import React from "react";

const Card = (props) => {
  return (
    <div className="card mb-4 shadow-sm">
      {/* Header del Post */}
      <div className="card-header bg-white d-flex justify-content-between align-items-center py-2">
        <h6 className="mb-0 fw-bold">{props.title}</h6>
        <span className="text-muted small">{props.date}</span>
      </div>

      {/* Imagen del Post - Aspecto cuadrado estilo Instagram */}
      <div
        className="position-relative"
        style={{ paddingBottom: "100%", overflow: "hidden" }}
      >
        <img
          src={props.image}
          className="position-absolute top-0 start-0 w-100 h-100"
          alt={props.alt}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Footer del Post */}
      <div className="card-body py-2">
        {/* Iconos de Interacción */}
        <div className="d-flex align-items-center gap-3 mb-2">
          <i
            className="fa-regular fa-heart fs-5"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fa-regular fa-comment fs-5"
            style={{ cursor: "pointer" }}
          ></i>
          <i
            className="fa-regular fa-paper-plane fs-5"
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        {/* Likes */}
        <p className="mb-1 fw-bold small">{props.likes} Likes</p>

        {/* Descripción */}
        <p className="text-muted mb-0 small">
          <span className="fw-bold text-dark">{props.title}</span> {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card;
