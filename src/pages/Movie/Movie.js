import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesData from "../../api/movies";
export default function Movie() {
  const { pageId } = useParams();

  useEffect(() => {
    const targetMovie = moviesData.find(
      (currentValue) => pageId === currentValue.id
    );
    console.log("targetMovie ==> ", targetMovie);
  }, [pageId]);

  return <div>Movie {pageId}</div>;
}

// useParams() => { pageId : '????' }
