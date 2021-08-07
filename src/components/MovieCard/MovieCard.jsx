import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.css";
import { img_300 } from "../../config/config";
import { Badge } from "@material-ui/core";
import Panda from '../../images/panda.jpg'

const MovieCard = ({ id, title, poster, date, media, voteAverage }) => {
  return (
    <Badge
      badgeContent={voteAverage}
      color={voteAverage > 6 ? "secondary" : "primary"}
    >
      <div className="media">
        <img className="poster" src={poster ? `${img_300}/${poster}` : Panda} alt={title} />
        <b className="title">{title}</b>
        <span>{media === "tv" ? "TV Series" : "Movie"}</span>
        <span className="date">{date}</span>
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
