import React from "react";
import Card from "./Card/Card";
import "./Section.css";
export default function Section({ title, data }) {
  console.log(title, data);
  return (
    <section className="Section">
      <h4>{title}</h4>
      <div className="Cards">
        {data?.map((currentValue) => (
          <Card key={currentValue.id} movie={currentValue} />
        ))}
      </div>
    </section>
  );
}
