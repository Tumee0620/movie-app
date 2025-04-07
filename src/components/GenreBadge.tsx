import axios from "axios";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const GenreBadge = ({ onclick }) => {
  const [genre, SetGenre] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
      )
      .then((response) => {
        SetGenre(response.data.genres);
      });
  }, []);
  console.log(genre);

  return (
    <div className="flex flex-wrap gap-3">
      {genre.map((value) => {
        return (
          <Badge
            onClick={() => {
              onclick(value.id);
            }}
            className="bg-blue-200 text-black "
            key={value.id}
          >
            {value.name}
            <MdOutlineKeyboardArrowRight color="black" />
          </Badge>
        );
      })}
    </div>
  );
};
