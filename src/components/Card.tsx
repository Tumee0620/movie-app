export const Cardcontainer = ({ image, moviename }) => {
  return (
    <div className="w-[230px] h-[439px] flex flex-col pl-[80px] pt-[32px]   ">
      <div className="w-[230px] h-[340px] ">
        <img className="flex h-[340px] w-full " src={image} alt="" />
      </div>
      <div className="w-[230px] h-[89px] p-2 bg-stone-200 justify-center ">
        <div className="flex ">
          {" "}
          <img src="star.svg" alt="" />
          <p className="font-bold-">6.9</p>
          <p className="text-gray-400">/10</p>
        </div>
        <p className="h-[56px]">{moviename}</p>
      </div>
    </div>
  );
};
