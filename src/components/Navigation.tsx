import { FaChevronDown } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export const Navigation = () => {
  return (
    <div className="flex px-4 h-[59px] items-center">
      <div className="flex w-full justify-between items-center">
        <div
          className="flex items-center
        "
        >
          <img className="w-[20px] h-[20px]" src="film.svg" alt="" />
          <p className="text-[16px] font-[700]  text-[#4338CA]">Movie Z</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center border-1 px-4 py-2 rounded-[6px] border-[#E4E4E7] ">
            <FaChevronDown />
            <button className="w-[97px] h-[36px] ">Genre</button>
          </div>
          <div className="flex items-center gap-[10px] border-1 rounded-[6px] w-[379px] h-[36px] px-4 py-[26px] ">
            <CiSearch />
            <input
              placeholder="Search.."
              type="text"
              className="w-[379px] h-[36px] outline-none"
            />
          </div>
        </div>
        <div className="flex w-[36px] h-[36px] border-2 border-[#E4E4E7] items-center justify-center rounded-[6px]">
          <FaRegMoon />
        </div>
      </div>
    </div>
  );
};
