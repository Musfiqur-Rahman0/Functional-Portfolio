import React from "react";
import { gmail, socialLinks } from "@/consents/data";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-10 mt-5 max-w-7xl mx-auto">
      <div className=" mx-auto space-y-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div>
          <p className="">
            Seasoned Full Stack Software Engineer with over 8 years of hands-on
            experience in designing and implementing robust, scalable, and
            innovative web solutions. Adept at leveraging a comprehensive skill
            set encompassing front-end and back-end technologies
          </p>
          <div className="flex items-center mt-2 gap-1">
            <IoMdMail size={24} />
            <p className="font-semibold">{gmail}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map((Icon, index) => (
            <Icon key={index} size={30} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
