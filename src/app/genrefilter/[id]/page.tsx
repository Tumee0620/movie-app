"use client";
import { GenreBadge } from "@/components/GenreBadge";
import { MovieCard } from "@/components/MovieCard";
import { useParams } from "next/navigation";
import { CardTwoFor } from "@/components/CardforPage2";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
function Genrefilter() {
  const params = useParams();
  const [genrefilter, setGenrefilter] = useState([]);
  const [resultData, setResultData] = useState();
  const [resultGenre, setResultGenre] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${params.id}&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((response) => {
        setGenrefilter(response.data.results);
        setResultData(response.data);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((response) => {
        setResultGenre(response.data.genres);
      });
  }, []);
  const user = useRouter();
  const PageSwitcher = (id: string) => {
    user.push(`/genrefilter/${id}`);
  };
  const routerUp = useRouter();
  const handleOnClick = (id: string) => {
    routerUp.push(`/details/${id}`);
  };

  const selectedGenre = resultGenre?.filter(
    (el) => el.id === Number(params.id)
  );
  console.log(resultGenre, "SSS");
  console.log(selectedGenre, "SSSS");

  return (
    <div className="w-full h-fit bg-white px-20">
      <div>
        <p className="font-bold">Search filter</p>
        <div className="flex">
          <div>
            <div className="flex flex-row">
              <p>Genres</p>
              <p>See lists of movies by genre</p>
            </div>
            <div className="flex">
              <div className="w-[352px]">
                <GenreBadge onclick={PageSwitcher}></GenreBadge>
              </div>
              <div className="w-[2px] h-[699px] bg-gray-300"></div>
            </div>
          </div>
          <div className=" flex">
            <div className="flex gap-2 ">
              <p className="font-medium flex">
                {resultData?.total_results}{" "}
                <span className="pl-3">titles in</span>
              </p>
              {selectedGenre.map((el, i) => (
                <span className="font-medium" key={i}>
                  "{el.name}"
                </span>
              ))}
            </div>
          </div>
          <div className="w-fit">
            <div className="flex flex-wrap">
              {genrefilter.slice(0, 12)?.map((movie, i) => {
                return (
                  <CardTwoFor
                    onClick={() => PageSwitcher(movie.id)}
                    key={i}
                    title={movie.title}
                    rate={movie.vote_average}
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Genrefilter;
