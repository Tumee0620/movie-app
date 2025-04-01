"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import axios from "axios";
import { Slice } from "lucide-react";
import { useRouter } from "next/navigation";

export const UpcomingSection = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const routerUp = useRouter();
  const handleOnClick = (id: string) => {
    routerUp.push(`/details/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((response) => {
        setUpcomingMovies(response.data.results);
      });
  }, []);
  console.log(upcomingMovies);

  return (
    <div className="flex flex-wrap">
      {upcomingMovies.slice(0, 10)?.map((movie, i) => {
        return (
          <MovieCard
            onClick={() => handleOnClick(movie.id)}
            key={i}
            title={movie.title}
            rate={movie.vote_average}
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          />
        );
      })}
    </div>
  );
};
