import React from "react";
import locPin from "../assets/pin.svg";

export default function Location(props) {
  return (
    <div className="loc--cont">
      <img className="loc--img" src={props.loc.imageUrl} alt="" />
      <div className="loc--info">
        <div className="loc--subtitle">
          <img className="loc--pin" src={locPin} alt="" />
          <p className="loc--country">{props.loc.location}</p>
          <a
            className="loc--gMaps"
            target="_blank "
            href={props.loc.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="loc--title">{props.loc.title}</h1>
        <span className="loc--date">
          {props.loc.startDate} - {props.loc.endDate}
        </span>
        <p className="loc--desc">{props.loc.description}</p>
      </div>
    </div>
  );
}
