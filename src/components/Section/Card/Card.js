import React from "react";
import "./Card.css";
export default function Card({ movie }) {
  return <article className="Card">{movie.title}</article>;
}
