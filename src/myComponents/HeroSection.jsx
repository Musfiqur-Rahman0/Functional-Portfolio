import React from "react";
import circle from "../assets/testfinal.json";
import Lottie from "lottie-react";
import bannerImg from "../assets/banner-man.png";
import BackgroundCirlcle from "./BackgroundCirlcle";
const HeroSection = () => {
  return (
    <div className="mt-20 grid grid-cols-2  gap-20 justify-between relative">
      <figure className="z-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full ">
        <img src={bannerImg} alt="" className="h-full " />
      </figure>
      <BackgroundCirlcle />
      <div className=" ">
        <h2 className="text-9xl font-bold text-right">Musfiqur Rahman</h2>
      </div>
      <div className="z-10 pl-10  rounded-lg    flex items-center justify-end">
        <div className="min-w-[40px]  space-y-5 flex flex-col items-start justify-between">
          <Lottie
            animationData={circle}
            style={{
              height: 100,
            }}
          />
          <div class=" text-white flex items-center justify-center ">
            <div class="max-w-md space-y-6">
              <h1 class="text-3xl font-bold tracking-tight">
                <span class=" block mb-2 text-5xl cursor-pointer">
                  Front End{" "}
                  <span className="text-6xl text-primary/90 hover:text-primary ">
                    Developer
                  </span>
                </span>
                <span class=" block">
                  Based in Bangladesh, I’m A Passionate Frontend Developer .
                </span>
              </h1>

              <p class=" text-gray-300">
                It’s certainly not easy to get noticed in today’s marketplace.
                Quality content marketing is what it takes to make a modern
                brand truly shine.
              </p>

              <div class="space-y-2 text-gray-400">
                <p>
                  <span class="font-semibold">Phone:</span> +880 179 421 37 88
                </p>
                {/* <p><span class="font-semibold">E:</span> example@website.com</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
