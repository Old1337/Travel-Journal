import React from "react";

import LocationImg from "../../images/Location.png";

export default function Card(props) {
  return (
    <div className="wrapper p-5 mt-5  flex-column  flex-md-row d-flex gap-5 border-bottom align-items-center">
      <img className="w-25 card-img rounded" src={props.image} alt="" />
      <div className="text d-sm-grid justify-content-center">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src={LocationImg} width="10px" alt="" />
            <span>{props.location}</span>
          </div>
          <a className="link-secondary" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="fs-1 mb-3">{props.title}</h2>
        <span className="fw-bold fs-6">
          {props.startDate} - {props.endDate}
        </span>
        <p className="w-100">{props.description}</p>
      </div>
    </div>
  );
}
