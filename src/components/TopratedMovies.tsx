import axios from "axios";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import { useRouter } from "next/navigation";

export const TopRatedSection = () => {
  const [topRatedMovie, setTopRatedMovie] = useState([]);
  const routertop = useRouter();
  const handleOnClick = (id: string) => {
    routertop.push(`/details/${id}`);
  };
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((response) => {
        setTopRatedMovie(response.data.results);
      });
  }, []);
  console.log(topRatedMovie);

  return (
    <div className="flex flex-wrap">
      {topRatedMovie.slice(0, 10)?.map((movie, i) => {
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
