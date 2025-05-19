import React from "react";
import { motion } from "framer-motion";
const Card = ({ position }) => {
  const testVariant = {
    initial: {
      x: position === "top-left" || position === "bottom-left" ? -300 : 0,
      y: position === "top-right" || position === "bottom-right" ? -300 : 0,
    },
    animate: {
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      custom={position}
      variants={testVariant}
      initial="initial"
      whileInView="animate"
      className="z-10  hover:border-y hover:border-blue-500 transition-colors duration-300  grid grid-cols-4 gap-3 items-center p-8 rounded-xl border-t border-[#693B93] bg-gradient-to-br to-[#2C1250] from-[#2C1250]"
    >
      <figure>
        <img src="/src/assets/Group 2.png" alt="" />
      </figure>
      <div className="col-span-3">
        <h2 className="text-3xl font-semibold ">CIB on the Mobile</h2>
        <p className="text-sm my-1">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
        <button className="px-5 py-1 mt-2 rounded-xl cursor-pointer bg-[#693B93] border-[#693B93]">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
