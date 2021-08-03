import axios from "axios";
import React from "react";
import './Movies.css'
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function Movies() {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <span className="pageTitle">Top Movies</span>
      <div className="movies">
        {content &&
          content.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title || movie.name}
              poster={movie.poster_path}
              date={movie.first_air_date || movie.release_date}
              media={movie.media_type}
              voteAverage={movie.vote_average}
            />
          ))}
      </div>
    </>
  );
}
