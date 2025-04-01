import { GrFormNextLink } from "react-icons/gr";
export const MovieType = ({ genre }: { genre: string }) => {
  return (
    <div className="flex justify-between px-20 pt-[20px]">
      <p className="font-bold text-[24px]">{genre}</p>
      <p
        className="flex
       items-center"
      >
        See more <GrFormNextLink className="size-5" />
      </p>
    </div>
  );
};
