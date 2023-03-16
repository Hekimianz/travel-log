import React from "react";
import icon from "../assets/planet.svg";

export default function Head() {
  return (
    <div className="head--cont">
      <img src={icon} alt="" className="head--icon" />
      <p className="head--title">my travel journal.</p>
    </div>
  );
}
