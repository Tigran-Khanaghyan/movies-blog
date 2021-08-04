import axios from "axios";
import React from "react";
import "./Movies.css";
import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import PagePagination from "../../components/Pagination/PagePagination";

export default function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log(data);
    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <span className="pageTitle">Top Movies</span>
      <div className="movies">
        {console.log(content)}
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
      <PagePagination/>
    </div>
  );
}
