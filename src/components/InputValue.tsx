import axios from "axios";
import { useEffect, useState } from "react";

export const InputValue = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?query=Mark&language=en-US&page=1"
      )
      .then((response) => {
        setInputValue(response.data.results);
      });
  }, []);
  return <div></div>;
};
