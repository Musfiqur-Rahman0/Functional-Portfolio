import { technologies } from "@/consents/data";
import React from "react";
import Technology from "./Technology";

const Technologies = () => {
  return (
    <div className="flex items-center justify-center mt-5 gap-5 max-w-[70%] mx-auto">
      {technologies.map((Tech, index) => (
        <Technology key={index} Tech={Tech} />
      ))}
    </div>
  );
};

export default Technologies;
