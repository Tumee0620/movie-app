import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import { Carousel } from "./ui/carousel";
import { MovieCarus } from "./MovieCarus";

type getUpComingTypes = {
  title: string;
  backdrop_path: string;
};

export const NowPlaying = () => {
  const [getUpComing, setGetUpComing] = useState<getUpComingTypes[]>([]);

  const getMoviedata = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      );
      setGetUpComing(data.results);
    } catch (err: any) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getMoviedata();
  }, []);

  return <MovieCarus />;
};
