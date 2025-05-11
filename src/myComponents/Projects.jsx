import { Button } from "@/components/ui/button";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Projects = ({ order, project }) => {
  const { description, name, category, id } = project;
  const navigate = useNavigate();

  return order !== "reversed" ? (
    <>
      <div className="grid grid-cols-2  relative items-center mt-10">
        {/* background circle  */}
        <div
          className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-[50%]  -top-[5%]  rounded-full z-[5px] `}
        ></div>
        <div className="">
          <p className="text-xs">{category}</p>
          <h3 className="text-3xl font-semibold">Project-{name}</h3>

          <div className="z-20 my-10 relative w-[110%] p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm">
            <p className="">{description.slice(0, 320) + "..."}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate(`/project/${id}`)}
              className="bg-[#693B93] cursor-pointer rounded-full"
            >
              <span>View Details</span>
              <LuMousePointerClick />
            </Button>
          </div>
        </div>
        <div className={`pt-10 pl-10 bg-black rounded-xl z-10 `}>
          <figure className="h-[400px] w-full">
            <img
              src="/src/assets/assignment7show.netlify.app_ (1).png "
              alt=""
              className="h-full  w-full object-cover rounded-tl-xl  "
            />
          </figure>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="grid grid-cols-2 gap-8 relative items-center mt-10">
        <div
          className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-0  top-[5%]  rounded-full z-[5px] `}
        ></div>
        <div className={`pt-10 pr-10 bg-black rounded-xl z-10 `}>
          <figure className="h-[400px] w-full">
            <img
              src="/src/assets/eventio-e228a.web.app_ (1).png"
              alt=""
              className="h-full w-full object-cover rounded-tr-lg"
            />
          </figure>
        </div>
        <div className="">
          <p className="text-xs">{category}</p>
          <h3 className="text-3xl font-semibold">Project-{name}</h3>

          <div className="z-20 my-10 relative w-full p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm">
            <p className="">{description.slice(0, 220) + "..."}.</p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate(`/project/${id}`)}
              className="bg-[#693B93] cursor-pointer rounded-full"
            >
              <span>View Details</span>
              <LuMousePointerClick />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
