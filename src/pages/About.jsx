import { aboutMe, blurVariant } from "@/consents/data";
import { AuthContext } from "@/Context/AuthContext";
import BackgroundCirlcle from "@/myComponents/BackgroundCirlcle";
import Comments from "@/myComponents/Comments";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import about from "../assets/aboutAni.json";
const About = () => {
  return (
    <div className="flex flex-col  justify-center pt-12 gap-10">
      <h2 className="text-white text-5xl font-bold text-center mb-10 dark:text-primary">
        About me!
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 text-justify ">
        <motion.p
          variants={blurVariant}
          initial="hidden"
          animate="visible"
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
          className=" rounded-lg z-10"
        >
          <Lottie
            animationData={about}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </motion.figure>
        {/* <BackgroundCirlcle /> */}
      </div>

      <div>
        <h2 className="text-5xl text-white font-bold text-center mt-10 dark:text-primary">
          Reviews
        </h2>
      </div>

      <Comments />
    </div>
  );
};

export default About;
