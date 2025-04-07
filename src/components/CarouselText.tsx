import { Yellowtail } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
export const CarouselText = ({
  title,
  essay,
  rate,
  id,
}: {
  id: number;
  title: string;
  essay: string;
  rate: string;
}) => {
  const [trailerMovies, setTrailerMovies] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=d67d8bebd0f4ff345f6505c99e9d0289`
      )
      .then((response) => {
        setTrailerMovies(response.data.results);
      });
  }, []);
  console.log(trailerMovies, "MOVIE TRAIl");

  return (
    <div className="absolute flex flex-col gap-5 left-[100px] top-[200px] z-30">
      <div className="flex flex-col">
        <p className="text-white text-4">Now Playing:</p>
        <p
          className="
        text-white font-bold text-[25px]"
        >
          {title}
        </p>
      </div>
      <div className="flex gap-2">
        <FaStar color="yellow" fill="yellow" size={21} />
        <div className="flex">
          <p className="text-white">{rate}</p>
          <p className="text-gray-500">/10</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-[140px]">
        <p className="text-[12px] font-400 w-[302px] h-auto text-[#FAFAFA]">
          {essay}
        </p>
      </div>
      <Dialog>
        <DialogTitle className="hidden"></DialogTitle>
        <DialogTrigger>
          <div className="w-30 h-10 bg-white rounded-full gap-2 flex items-center justify-center">
            <CiPlay1 color="black"></CiPlay1>{" "}
            <p className="font-medium">Watch trailer</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          {trailerMovies.length === 0 ? (
            <p>Trailer Baihgui</p>
          ) : (
            <iframe
              className="w-full"
              width="560"
              height="315"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${trailerMovies[0].key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
