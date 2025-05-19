import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { blurVariant, glowing, whatsapp } from "@/consents/data";
import { motion } from "framer-motion";
import React from "react";

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
        className="text-center space-y-3 w-4/5"
      >
        <h1 className="text-4xl md:text-5xl xl:text-6xl  font-bold text-center">
          I do code and make content <span className="">about it!</span>
        </h1>
        <p className="text-[0.6rem] sm:text-sm ">
          I am a seasoned full-stack software engineer with over 8 years of
          professional experience, specializing in backend development. My
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
        </p>
      </motion.div>
      <div className="flex items-center gap-5">
        <Button className="rounded-full text-sm cursor-pointer">
          Get In Touch
        </Button>
        <Button
          variant="outline"
          className="text-black text-sm rounded-full cursor-pointer"
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
