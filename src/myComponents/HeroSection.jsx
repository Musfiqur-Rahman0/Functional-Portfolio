import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { blurVariant, glowing, whatsapp } from "@/consents/data";
import { motion } from "framer-motion";
import React from "react";
import circleGlow from "../assets/Animation - 1748050319866.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <div className="p-8 w-full flex items-center justify-center relative ">
        <motion.div
          variants={glowing}
          animate="glow"
          className="absolute h-[90%] w-[45%] md:w-[15%] rounded-full bg-radial from-[#763CAC] to-primary blur-2xl"
        ></motion.div>

        <Avatar className="rounded-full bg-primary ">
          <AvatarImage src="/src/assets/Avatar.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <motion.div
        variants={blurVariant}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
        }}
        className="text-center space-y-3 w-full md:w-4/5"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold text-center">
          Developing ideas into{" "}
          <Typewriter
            className="text-primary"
            words={["Reality", "Revolution", "Results"]}
            loop
          >
            Reality
          </Typewriter>
          .
        </h1>
        <p className="text-[0.6rem] sm:text-sm ">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </motion.div>
      <div className="flex items-center gap-5">
        <a href="https://wa.me/+8801794213788" target="_blank">
          <Button className="rounded-full text-sm cursor-pointer">
            Get In Touch
          </Button>
        </a>
        <Button
          variant="outline"
          className=" text-black dark:text-white text-sm rounded-full cursor-pointer"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
