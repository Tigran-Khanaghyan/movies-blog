import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Movies() {
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  fetchMovies();

  return (
    <>
      <span className="pageTitle">Top Movies</span>
      <div className="movies">
        {content && content.map((movie) => console.log(movie))}
      </div>
    </>
  );
}
