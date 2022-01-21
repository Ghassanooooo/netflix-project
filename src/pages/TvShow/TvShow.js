import "./TvShow.css";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const backendURL = process.env.REACT_APP_BACKEND_URL
export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState({});
  const [tvShowSeason, setTvShowSeason] = useState({});

  const getTvShowById = async()=>{
    const res = await fetch(`${backendURL}/tv-show/${tvShowId}`)
    const data = await res.json()
    setTvShowObject(data)
    setTvShowSeason(data?.seasons[0])
  }

  useEffect(() => {
  getTvShowById()
  }, [tvShowId]);

  return (
    <div>
      <h1>{tvShowObject?.title}</h1>

      <div className="TvShow">
        <div className="Seasons">
          {tvShowObject?.seasons?.map((el) => (
            <div
              key={el.id}
              className="Season"
              onClick={() => setTvShowSeason(el)}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div className="Episodes">
          {tvShowSeason?.episodes?.map((el) => (
            <div className="Episode" key={el.id}>
              <Link
                to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${el.id}`}
              >
                <img
                  className="EpisodeImage"
                  src={el.image}
                  alt=""
                  width={200}
                />
              </Link>
              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
