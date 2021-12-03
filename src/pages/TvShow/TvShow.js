import "./TvShow.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tvShowsArray from "../../api/tvShows";
export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState({});
  const [tvShowSeason, setTvShowSeason] = useState({});

  useEffect(() => {
    const getTvShow = tvShowsArray.find((el) => el.id === tvShowId);
    setTvShowObject(getTvShow);
    setTvShowSeason(getTvShow.seasons[1]);
  }, [tvShowId]);

  return (
    <div>
      <h1>{tvShowObject?.title}</h1>

      <div className="TvShow">
        <div className="Seasons">
          {tvShowObject?.seasons?.map((el) => (
            <div className="Season">{el.title}</div>
          ))}
        </div>
        <div className="Episodes">
          {tvShowSeason?.episodes?.map((el) => (
            <div className="Episode">
              <img src={el.image} alt="" width={100} />
              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
