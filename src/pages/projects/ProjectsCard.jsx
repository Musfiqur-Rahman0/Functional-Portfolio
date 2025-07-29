import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { blurVariant, containerVariants, itemVariants } from "@/consents/data";
import { motion } from "framer-motion";
import { IterationCcw } from "lucide-react";
import React from "react";
import { MdLocationPin, MdOutlineArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const ProjectCard = ({ project, reversed }) => {
  const {
    type,
    technologies,
    purpose,
    projectImage,
    _id,
    name,
    features,
    detailImages,
    description,
    category,
  } = project;
  const navigate = useNavigate();

  // console.log(project);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="mt-5 grid  md:grid-cols-3 gap-8 border-t border-[#693B93]  bg-gradient-to-br to-[#] from-[#2C1250] backdrop-blur-sm  p-3  md:p-8 rounded-2xl shadow-xl shadow-slate-900/30"
    >
      <figure
        onClick={() => navigate(`/project/${_id}`)}
        className={`w-full ${
          reversed ? "order-2" : "order-1"
        } overflow-hidden rounded-lg`}
      >
        <motion.img
          variants={blurVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 1,
          }}
          className="h-full w-full object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          src={projectImage}
          alt={name}
        />
      </figure>
      <div
        className={`p-3 w-full  !text-white md:col-span-2  space-y-3 md:space-y-5 ${
          reversed ? "order-1" : "order-2"
        }`}
      >
        <div className="flex items-center gap-5">
          <div className="flex font-semibold items-center gap-3 px-3 py-1 rounded-full bg-primary/50  text-white  w-fit">
            <span className=" text-sm ">{category}</span>
          </div>
          <div className="flex font-semibold items-center gap-3 px-3 py-1 rounded-full bg-primary/50  text-white   w-fit">
            <span className=" text-sm">{type}</span>
          </div>
        </div>
        <motion.div
          variants={blurVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
          }}
          className="space-y-3 py-2  "
        >
          <h2 className="mb-2 text-3xl md:text-3xl font-bold tracking-tight  dark:text-white">
            Project-{name}
          </h2>
          <p className="mb-3 font-normal  text-sm md:text-lg dark:text-gray-400">
            {description.slice(0, 220) + "..."}
          </p>
        </motion.div>
        <Link to={`/project/${_id}`} className="w-fit">
          <Button
            variant="contained"
            className="cursor-pointer border border-[#693B93] rounded-full text-xs md:text-[16px] "
          >
            View Details
            <MdOutlineArrowOutward className="ml-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
