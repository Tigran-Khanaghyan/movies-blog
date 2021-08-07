import React from "react";
import { TextField } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Loading from "../../images/Loading.gif";
import MovieCard from "../MovieCard/MovieCard";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const endPage = useRef();

  const theme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent((prevContent) => [...prevContent, ...data.results]);
    setLoading(true);
  };
  const fetchNewSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setLoading(true);
  };

  useEffect(() => {
    fetchSearch();
  }, [page]);

  useEffect(() => {
    fetchNewSearch();
  }, [searchText]);

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
    <div>
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex", margin: "25px 0" }}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </ThemeProvider>
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
        {content.length === 20 && (
          <div ref={endPage} className="loading">
            <img src={Loading} alt="loading gif" />
          </div>
        )}
      </div>
    </div>
  );
}
