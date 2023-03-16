import React from "react";
import Head from "./components/Head.js";
import Location from "./components/Location.js";
import data from "./data.js";

export default function App() {
  const locations = data.map((loc) => {
    return <Location key={loc.title} loc={loc} />;
  });
  return (
    <div className="main--cont">
      <Head />
      <section className="loc--list">{locations}</section>
    </div>
  );
}
