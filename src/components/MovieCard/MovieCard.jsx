import React from "react"
import PropTypes from 'prop-types';
import { img_300 } from "../../config/config";

const MovieCard = ({id, title, poster, date, media, voteAverage}) => {
    return (
        <div>
            <img src={`${img_300}/${poster}`} alt="" />
        </div>
    )
}

export default MovieCard
