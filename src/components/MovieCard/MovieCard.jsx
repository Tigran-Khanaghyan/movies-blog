import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";
import { img_300 } from "../../config/config";
import { Badge } from "@material-ui/core";
import { useHistory } from "react-router";
import Panda from "../../images/Panda.jpg";

const MovieCard = (props) => {

  let { id, title, poster, date, media, voteAverage } = props
  const history = useHistory();
  
  const handleMovieClick = () => {
    history.push(`movie/${id}`)
    localStorage.setItem('clickedMovie', JSON.stringify(props.movie))
  }


  return (
    <Badge
      badgeContent={voteAverage}
      color={voteAverage > 6 ? "secondary" : "primary"}
    >
      <div className="badge-container" onClick={handleMovieClick}>
        <div className="media">
          <img
            className="poster"
            src={poster ? `${img_300}/${poster}` : Panda}
            alt={title}
          />
          <div className='middle'>
            <button onClick={(event) => {
              event.stopPropagation()
              console.log(1)}} className='button'>Add to Favorites</button>
          </div>
          <b className="title">{title}</b>
          <span>{media === "tv" ? "TV Series" : "Movie"}</span>
          <span className="date">{date}</span>
        </div>
      </div>
    </Badge>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  poster: PropTypes.string,
  date: PropTypes.string,
  media: PropTypes.string,
  voteAverage: PropTypes.number,
};

export default MovieCard;
