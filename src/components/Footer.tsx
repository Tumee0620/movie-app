import { TbMovie } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";

export const Footer = () => {
  return (
    <div className="pt-10">
      <div className="w-full h-[280px] py-[40px] bg-[#4338CA] flex justify-between">
        <div className="flex-col">
          <p className="text-white flex items-center pl-10">
            <TbMovie color="white" />
            Movie Z
          </p>
          <p className="text-white pl-10 text-[10px]">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4 pl-130">
          <p className="text-white"> Contact Information</p>
          <div className="flex items-center gap-2">
            <MdOutlineMail color="white" />
            <div className="flex flex-col">
              <p className="text-white">Email:</p>
              <p className="text-white">support@movieZ.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LuPhone color="white" />
            <div className="flex flex-col">
              <p className="text-white">Phone:</p>
              <p className="text-white">+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pr-10">
          <p className="text-white">Follow us </p>
          <div className="flex gap-4 text-white">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
