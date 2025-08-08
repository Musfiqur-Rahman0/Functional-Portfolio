import { blurVariant } from "@/consents/data";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import about from "../assets/aboutAni.json";
import Reviews from "@/components/about/Reviews";

const AboutMe = () => <></>;

const About = () => {
  return (
    <div className="px-3 lg:px-0 flex flex-col  justify-center pt-12 gap-10">
      <h2 className="text-white text-5xl font-bold text-center mb-10 dark:text-primary">
        About me!
      </h2>

      <div className=" relative grid grid-cols-1 items-center  md:grid-cols-2 gap-5 text-justify ">
        <motion.div
          variants={blurVariant}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
          }}
          className="order-2 lg:order-1"
        >
          {/* introduction with skills*/}
          <p>
            I'm Musfiqur Rahman, a focused and flexible{" "}
            <strong>Frontend Developer</strong> with a passion for crafting
            clean, optimized, user-focused web experiences.With a deep
            understanding of <strong>Javascript</strong>, <strong>React</strong>
            , <strong>Tailwind CSS</strong>, <strong>Framer Motion</strong>, and
            more tools, I specialize in building modern, responsive, and clean
            UIs with dynamic interfaces that bring ideas to life.
          </p>
          <br />

          {/* work style */}
          <p>
            Over the past year, I have worked diverse projects from sleek
            landing page to complex web apps. always prioritizing performance,
            accessibility, and a seamless user experience. I belive in writing
            reusable , scalable, maintainable code and collaborating closely
            with teams to deliver meaningful digital solutions.
          </p>

          {/* interest  */}
          <p>
            When I’m not coding, you’ll find me exploring new technologies,
            improving my design skills, or learning new things
          </p>
          {/* goal */}
          <br />
          <p>
            At this time, I'm open to exciting opportunities where i can grow,
            contribute and help to turn vision into reality.
          </p>
        </motion.div>
        <motion.figure
          variants={blurVariant}
          initial="hidden"
          whileInView="visible"
          transition={{
            duration: 1,
          }}
          className=" rounded-lg z-10 order-1 lg:order-2"
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

      <Reviews />
    </div>
  );
};

export default About;
