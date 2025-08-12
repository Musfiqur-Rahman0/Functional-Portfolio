import React from "react";
import circle from "../../assets/testfinal.json";
import Lottie from "lottie-react";
import bannerImg from "../../assets/banner-man.png";
import CircleBackground from "../shared/CircleBackground";
import { GoDownload } from "react-icons/go";
import { motion } from "motion/react";
import cv from "../../assets/MusfiqurRahmanResume.pdf";

const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col md:grid md:grid-cols-2 gap-5 md:gap-24 justify-between relative">
      <figure className="relative z-10 md:absolute md:top-1/2 md:left-[52%] md:-translate-y-1/2 md:-translate-x-[52%] h-full ">
        <img src={bannerImg} alt="" className="h-full " />
        <CircleBackground className="" />
      </figure>
      <CircleBackground className="hidden md:block" />
      <div className="flex flex-col gap-4 items-center">
        <h2 className="hidden md:block md:text-8xl md:text-right  lg:text-9xl font-bold lg:text-right">
          Musfiqur Rahman
        </h2>

        {/* <motion.a
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          href={cv}
          download={"MusfiqurRahmanResume.pdf"}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="border border-primary rounded-full aspect-square p-2 cursor-pointer"
        >
          <GoDownload size={24} className="text-white" />
        </motion.a> */}
      </div>
      <div className="z-10 lg:pl-10  rounded-lg  bg-transparent backdrop:blur-3xl    flex items-center justify-end">
        <div className="min-w-[40px]   flex flex-col items-start justify-between">
          <motion.a
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            href={cv}
            download={"MusfiqurRahmanResume.pdf"}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="border border-primary rounded-full aspect-square p-2 cursor-pointer  flex items-center justify-center"
          >
            <GoDownload size={30} className="text-white" />
          </motion.a>
          <div className=" text-white flex items-center justify-center ">
            <div className="max-w-md space-y-6">
              <div>
                <h1 className="text-xl font-bold lg:hidden">Musfiqur Rahman</h1>
                <h1 className="text-3xl font-bold tracking-tight">
                  <span className=" block mb-2 text-5xl cursor-pointer">
                    Front End{" "}
                    <span className="text-6xl text-primary/90 hover:text-primary ">
                      Developer
                    </span>
                  </span>
                  <span className=" block">
                    Based in Bangladesh, I’m A Passionate Frontend Developer .
                  </span>
                </h1>
              </div>

              <p className=" text-gray-300">
                It’s certainly not easy to get noticed in today’s marketplace.
                Quality content marketing is what it takes to make a modern
                brand truly shine.
              </p>

              <div className="space-y-1 text-gray-400">
                <p>
                  <span className="font-semibold">Phone:</span> +880 179 421 37
                  88
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  musfiqurrhaman6@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Button className={"absolute -bottom-16 left-1/2 -translate-x-1/2 w-1/4"}>
        Download CV
      </Button> */}
    </div>
  );
};

export default HeroSection;
