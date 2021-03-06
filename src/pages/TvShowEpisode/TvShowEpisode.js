import React, { useEffect, useState } from "react";
import "./TvShowEpisode.css";
import { useParams } from "react-router-dom";
//import tvShowsData from "../../api/tvShows";
//import tvShows from "../../api/tvShows";
import { Modal } from "react-bootstrap";

const backendURL= process.env.REACT_APP_BACKEND_URL

export default function TvShowEpisode() {

  const { tvShowId, seasonId, episodeId } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [season, setSeason] = useState({});
  const [episode, setEpisode] = useState({});
  const [isOpen, setIsOpen] = useState(false);







useEffect(() => {
const getEpisodeById= async()=>{
const res= await fetch(`${backendURL}/tv-show-episode/${tvShowId}/${seasonId}/${episodeId}`)
const data = await res.json()
setEpisode(data)

}
const getSeasonById=async()=>{
  const res= await fetch(`${backendURL}/tv-show-season/${tvShowId}/${seasonId}`)
  const data =await res.json()
  setSeason(data)
}


const getTvShowById = async()=>{
  const res= await fetch(`${backendURL}/tv-show/${tvShowId}`)
  const data = await res.json()
  setTvShow(data)
}
  getEpisodeById()
  getSeasonById()
  getTvShowById()
  }, [tvShowId, seasonId, episodeId]);

  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow.image})` }}
    >
      <h1>{tvShow.title}</h1>
      <h2>
        {season.title} - {episode.title}
      </h2>
      <div className="Play" onClick={() => setIsOpen(!isOpen)}>
        PLAY
      </div>

      <Modal
        onHide={() => setIsOpen(false)}
        show={isOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <iframe
          height="400"
          src={episode.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </Modal>
    </div>
  );
}
