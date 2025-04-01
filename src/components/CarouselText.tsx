import { Yellowtail } from "next/font/google";
import { FaStar } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";
export const CarouselText = ({
  title,
  essay,
  rate,
}: {
  title: string;
  essay: string;
  rate: string;
}) => {
  return (
    <div className="absolute flex flex-col gap-5 left-[100px] top-[200px]">
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
        <button className="flex items-center bg-white text-black rounded-md px-2 py-1 gap-2">
          <CiPlay1 />
          <p>Watch Trailer</p>
        </button>
      </div>
    </div>
  );
};
