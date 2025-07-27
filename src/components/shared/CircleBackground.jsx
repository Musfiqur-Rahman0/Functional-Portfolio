import { motion } from "motion/react";
import React from "react";
import { glowing } from "@/consents/data";

const CircleBackground = () => {
  return (
    <motion.div
      variants={glowing}
      animate="glow"
      className={`h-full w-1/3  absolute bg-radial from-[#763CAC] to-primary blur-[200px] left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2  rounded-full z-[5px] `}
    ></motion.div>
  );
};

export default CircleBackground;
