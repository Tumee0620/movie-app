import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="w-full h-[200px] bg-[#4338CA] text-white flex mt-20 justify-around ">
      <div className="flex items-start flex-col justify-start pt-10">
        <img className="w-[60px] h-[15px]" src="Logo.png" alt="" />
        <p className="text-[10px]">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex flex-col justify-center">
        <p>Contact Information</p>
        <div className="flex items-center gap-3">
          <CiMail />
          <div className="flex flex-col">
            <p>Email:</p>
            <p>support@movieZ.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FiPhone />

          <div className="flex flex-col">
            <p>Phone:</p>
            <p>+976 (11) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col  justify-start pt-10">
        <p>Follow us </p>
        <div
          className="flex gap-3 
          "
        >
          <p>Facebook </p>
          <p>Instagram</p>
          <p>Twitter</p>
          <p>Youtube</p>
        </div>
      </div>
    </div>
  );
};
