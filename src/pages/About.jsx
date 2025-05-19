import { aboutMe, blurVariant } from "@/consents/data";
import { AuthContext } from "@/Context/AuthContext";
import BackgroundCirlcle from "@/myComponents/BackgroundCirlcle";
import Comments from "@/myComponents/Comments";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col  justify-center pt-12 gap-10">
      <h2 className="text-5xl font-bold text-center mb-10 text-primary">
        About me!
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 text-justify ">
        <motion.p
          variants={blurVariant}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 0.5,
          }}
        >
          {aboutMe}
        </motion.p>
        <motion.figure
          variants={blurVariant}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1,
          }}
          className="bg-gray-100 rounded-lg z-10"
        >
          {/* <img src="" alt="noImg" /> */}
        </motion.figure>
        {/* <BackgroundCirlcle /> */}
      </div>

      <div>
        <h2 className="text-5xl font-bold text-center mt-10 text-primary">
          Reviews
        </h2>
      </div>

      <Comments />
    </div>
  );
};

export default About;
