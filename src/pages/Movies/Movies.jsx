import axios from "axios";
import React from "react";
import "./Movies.css";
import { useState, useEffect, useRef } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Loading from "../../images/Loading.gif";

export default function Movies() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const endPage = useRef();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent((prevContent) => [...prevContent, ...data.results]);
    setLoading(true);
  };

  useEffect(() => {
    fetchMovies();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 }
      );
      observer.observe(endPage.current);
    }
  }, [loading]);

  return (
    <div className="container">
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
      <div ref={endPage} className="loading">
        <img src={Loading} alt="loading gif" />
      </div>
    </div>
  );
}
