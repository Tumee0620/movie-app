"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { CarouselText } from "./CarouselText";
import { Slice } from "lucide-react";
import { useRouter } from "next/navigation";

type movieprops = { image: string };
type getUpComingTypes = {
  title: string;
  backdrop_path: string;
};
export const MovieCarus = () => {
  const [getUpComing, setGetUpComing] = useState<getUpComingTypes[]>([]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
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

  console.log(getUpComing[0]);
  const user = useRouter();
  const [switcher, setSwitcher] = useState();
  const PageSwitcher = (id: string) => {
    user.push(`/details/${id}`);
  };

  useEffect(() => {
    getMoviedata();
  }, []);
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Fragment>
      <Carousel className="relative" setApi={setApi}>
        <CarouselContent>
          {getUpComing.map((value: any, index: number) => {
            return (
              index < 3 && (
                <CarouselItem
                  key={index}
                  className="flex relative w-screen h-[600px] bg-full bg-cover  "
                >
                  <img
                    onClick={PageSwitcher}
                    src={`https://image.tmdb.org/t/p/original${value.backdrop_path}`}
                    className="w-full object-cover "
                    alt=""
                  />
                  <CarouselText
                    id={value.id}
                    title={value.title}
                    essay={value.overview}
                    rate={value.vote_average}
                  />
                </CarouselItem>
              )
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[10px]" />
        <CarouselNext className="absolute right-[10px]" />
      </Carousel>
      <div className="relative flex justify-center ">
        {current == 1 ? (
          <div className="flex gap-2 rounded-full justify-center absolute bottom-10  ">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        {current == 2 ? (
          <div className="flex gap-2 rounded-full justify-center absolute bottom-10">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        {current == 3 ? (
          <div className="flex gap-2 justify-center absolute bottom-10 ">
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>

            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </Fragment>
  );
};
