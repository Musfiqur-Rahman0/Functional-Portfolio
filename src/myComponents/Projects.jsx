import { Button } from "@/components/ui/button";
import { glowing } from "@/consents/data";
import { motion, scale } from "framer-motion";
import React from "react";
import { FaBeer } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Projects = ({ order, project }) => {
  const { description, name, category, id, projectImage } = project;
  const navigate = useNavigate();

  const fadeIn = {
    hidden : {opacity : 0, scale: 0.8, x : -300},
    animate : {opacity : 1, scale: 1, x: 0, transition : {duration : 1.5}}
  }

  const fadeOut = {
    hidden : {
      opacity : 0, scale: 0.8, x : 300
    },
    animate : {
      opacity : 1, scale: 1, x: 0, transition : {duration : 1.5}
    }
  }

  const floting =  {
    float :
    { y : [0, 10, 0], 
      transition : {
        delay : 1.5,
        duration : 2,
         ease:  "easeInOut",
         repeatType : "reverse",
         repeat :Infinity
       }}
  }

  return order !== "reversed" ? (
    <>
      <div className="grid grid-cols-2  relative items-center mt-10">
        {/* background circle  */}
        <motion.div 
        variants={glowing}
        animate="glow"
          className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-[50%]  -top-[5%]  rounded-full z-[5px] `}
        ></motion.div>
        <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="animate"
        className="">
          <p className="text-xs">{category}</p>
          <h3 className="text-3xl font-semibold">Project-{name}</h3>

          <div className="z-20 my-10 relative w-[110%] p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm">
            <p className="">{description.slice(0, 320) + "..."}</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate(`/project/${id}`)}
              className="bg-[#693B93] hover:bg-[#693B93]/90 cursor-pointer rounded-full text-white"
            >
              <span>View Details</span>
              <LuMousePointerClick />
            </Button>
          </div>
        </motion.div>
        <motion.div variants={fadeOut} initial="hidden"  whileInView="animate" className={`pt-10 pl-10 bg-black rounded-xl z-10 `}>
          <figure className="h-[400px] w-full overflow-hidden">
            <motion.img 
            variants={floting}
            whileInView="float"
              src={projectImage}
              alt={name}
              className="h-full  w-full object-cover rounded-tl-xl cursor-pointer "
            />
          </figure>
        </motion.div>
      </div>
    </>
  ) : (
    <>
      <div className="grid grid-cols-2 gap-8 relative items-center mt-10">
        <motion.div
        variants={glowing}
        animate= "glow"
          className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[80px] left-0  top-[5%]  rounded-full z-[5px] `}
        ></motion.div>
        <motion.div variants={fadeIn} initial="hidden" whileInView="animate" className={`pt-10 pr-10 bg-black rounded-xl z-10 `}>
          <figure className="h-[400px] w-full overflow-hidden">
            <img 
           
              src={projectImage}
              alt={name}
              className="h-full w-full object-cover rounded-tr-lg"
            />
          </figure>
        </motion.div>
        <motion.div 
          variants={fadeOut}
          initial="hidden"
          whileInView="animate"
        className="">
          <p className="text-xs">{category}</p>
          <h3 className="text-3xl font-semibold">Project-{name}</h3>

          <div className="z-20 my-10 relative w-full p-8 rounded-lg bg-[#2B0B3A]/70 backdrop-blur-sm">
            <p className="">{description.slice(0, 220) + "..."}.</p>
          </div>

          <div
        
          className="flex items-center gap-3">
            <Button
              onClick={() => navigate(`/project/${id}`)}
              className="bg-[#693B93] hover:bg-[#693B93]/90 cursor-pointer rounded-full text-white"
            >
              <span>View Details</span>
              <LuMousePointerClick />
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Projects;
