import React from "react";

function DisplayCard(props) {
  return (
    <div>
      <div
        style={{ maxHeight: "350px", minWidth: "200px" }}
        className="card mb-2 overflow-auto"
        data-testid="card"
      >
        <img
          className="card-img-top"
          src={props.url}
          style={{ maxHeight: "150px" }}
          alt="Image Not Found!"
          data-testid="img"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayCard;
