import { CiPlay1 } from "react-icons/ci";
import { Card, CardContent } from "./ui/card";

export const Ncrd = ({ imgurl, description, movie }) => {
  return (
    <div>
      <Card className="relative">
        <CardContent className="flex   justify-center p-6">
          <img className="w-full h-[860px] relative" src={imgurl} alt="" />
        </CardContent>

        <div className="flex absolute flex-col gap-4 top-[350px] left-[100px] h-[600px]">
          <p className="text-white font-semibold">Now Playing:</p>
          <h1 className="text-[#FFF] text-[36px] font-bold w-[404px]">
            {movie}
          </h1>
          <div className="flex items-center">
            <img src="star.svg" alt="" />
            <p className="text-white">6.9/10</p>
          </div>
          <p className="w-[302px] h-[80px] text-white">{description}</p>
          <button className="flex mt-[70px] items-center w-[145px] h-[40px] bg-white rounded-[6px] px-4 py-2">
            <CiPlay1 />
            <p className="text-black ">Watch Trailer</p>
          </button>
        </div>
      </Card>
    </div>
  );
};
