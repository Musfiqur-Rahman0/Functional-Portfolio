import React from "react";
import circle from "../../assets/testfinal.json";
import Lottie from "lottie-react";
import bannerImg from "../../assets/banner-man.png";
import CircleBackground from "../shared/CircleBackground";

const HeroSection = () => {
  return (
    <div className="mt-20 flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-20 justify-between relative">
      <figure className="relative z-10 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 h-full ">
        <img src={bannerImg} alt="" className="h-full " />
        <CircleBackground className="" />
      </figure>
      <CircleBackground className="hidden lg:block" />
      <div className="">
        <h2 className="hidden lg:block  lg:text-9xl font-bold lg:text-right">
          Musfiqur Rahman
        </h2>
      </div>
      <div className="z-10 lg:pl-10  rounded-lg    flex items-center justify-end">
        <div className="min-w-[40px]  space-y-5 flex flex-col items-start justify-between">
          <Lottie
            animationData={circle}
            style={{
              height: 100,
            }}
          />
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
