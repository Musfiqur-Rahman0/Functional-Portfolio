import { containerVariants, itemVariants, technologies } from "@/consents/data";
import React from "react";
import Technology from "./Technology";
import { motion } from "framer-motion";
const Technologies = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        staggerChildren: 0.2,
      }}
      className="flex items-center justify-center mt-5 gap-5 max-w-[70%] mx-auto"
    >
      {technologies.map((Tech, index) => (
        <motion.div variants={itemVariants} key={index}>
          <Tech size={25} className="className=grayscale-50" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;
