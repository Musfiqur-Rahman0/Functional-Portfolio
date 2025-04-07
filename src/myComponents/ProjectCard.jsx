import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
const ProjectCard = ({ name, image }) => {
  return (
    <div className="mt-5 ">
      <img src={image} alt={name} />
      <div className="p-4 rounded-b-2xl bg-secondary">
        <p className="uppercase text-sm font-semibold">Click here to visit.</p>
        <div className="flex items-center justify-between">
          <h2 className="uppercase font-bold text-2xl">{name}</h2>
          <MdOutlineArrowOutward size={24} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
