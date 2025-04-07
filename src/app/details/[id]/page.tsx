"use client";
import { Navigation } from "@/components/Navigation";
import axios from "axios";
import { log } from "console";
import { StarIcon, Vote } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { GrFormNextLink } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MovieType } from "@/components/Movietype";
import { MovieCard } from "@/components/MovieCard";
import { title } from "process";
import { Footer } from "@/components/Footer";

function NextPage() {
  const params = useParams();
  const [similarMovieData, setSimilarMovieData] = useState([]);
  const [creditsDetail, setCreditsDetail] = useState([]);
  const [cast, setCast] = useState([]);
  const user = useRouter();
  const ToggleOnClick = (id: string) => {
    user.push(`/details/${id}`);
  };
  const getCreditData = async () => {
    const starsName = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
    );

    setCreditsDetail(starsName.data.crew);
    setCast(starsName.data.cast);
  };
  const getSimilarData = async () => {
    const avah = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/similar?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
    );
    console.log(avah, "start");

    setSimilarMovieData(avah.data.results);
  };
  const handleOnClick = () => {};
  const [data, setData] = useState([]);
  const [trailer, setTrailer] = useState();
  const getFetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
    );
    setData(response.data);
  };
  const getFetchData1 = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
    );
    console.log(response.data, "RESP");

    setTrailer(response.data.results[0]);
  };

  useEffect(() => {
    getFetchData();
    getSimilarData();
    getFetchData1();
    getCreditData();
  }, []);

  console.log(similarMovieData, "data");

  return (
    <div className="w-full h-full">
      <div className="flex justify-center">
        <div className="w-[1080px] flex flex-col">
          <div className="flex justify-between ">
            <div>
              <p className="text-[36px] font-medium">{data.title}</p>
              <div className="flex gap-5">
                <p>{data.release_date}</p>
                <p>{data.runtime}</p>
              </div>
            </div>
            <div>
              <p>Rating</p>
              <div className="flex items-center gap-2">
                <StarIcon color="yellow " fill="yellow" />
                <div className="flex flex-col">
                  <p className="font-medium">
                    {data.vote_average}
                    <span className="text-gray-400">/10</span>
                  </p>
                  <p className="text-gray-400">{data.vote_count}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className=" flex w-full justify-between space-x-5">
                <img
                  className="w-[290px] h-[428px]"
                  src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                  alt=""
                />
                <img
                  className="w-[760px] h-[428px] justify-between flex relative"
                  src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                  alt=""
                ></img>
                <span>
                  <button className="items-center absolute bottom-40  left-140 text-white flex gap-2">
                    <Dialog>
                      <DialogTitle className="hidden"></DialogTitle>
                      <DialogTrigger>
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                          <CiPlay1 onClick={handleOnClick} color="black" />
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <iframe
                          className="w-full"
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${trailer?.key}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </DialogContent>
                    </Dialog>
                    Play trailer
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p>{data.overview}</p>
            <div className="flex flex-row gap-5">
              <p className="font-medium">Director :</p>
              <div className="flex gap-2">
                {creditsDetail
                  .filter((value) => value.job === "Director")
                  .map((value) => (
                    <p
                      className="flex font-normal w-fit self-stretch text-black"
                      key={value.id}
                    >
                      {value.name}
                    </p>
                  ))}
              </div>
            </div>
            <div className="flex gap-5">
              <p className="font-medium ">Writers :</p>
              <div className="flex gap-2">
                {creditsDetail
                  .filter((value) => value.department === "Writing")
                  .slice(0, 5)
                  .map((value) => (
                    <p
                      className="flex font-normal w-fit self-stretch text-black"
                      key={value.id}
                    >
                      {value.name}
                    </p>
                  ))}
              </div>
            </div>
            <p className="font-medium flex gap-5">
              Stars :
              <div className="flex gap-2">
                {cast.slice(0, 5).map((value) => (
                  <p
                    className="flex font-normal w-fit self-stretch text-black"
                    key={value.id}
                  >
                    {value.name}
                  </p>
                ))}
              </div>
            </p>
          </div>

          <MovieType genre="More like this" />
        </div>
      </div>
      <div className="  flex flex-wrap">
        {similarMovieData.slice(0, 5)?.map((similarMovie) => {
          return (
            <MovieCard
              className={"h-[439px] w-[230px]"}
              onClick={() => {
                ToggleOnClick(similarMovie.id);
              }}
              rate={similarMovie?.vote_average}
              src={`https://image.tmdb.org/t/p/original${similarMovie?.poster_path}`}
              title={similarMovie?.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}
export default NextPage;
