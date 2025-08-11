import React from "react";
import error from "../../assets/Error 404.json";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex items-center justify-center  h-screen w-full">
      <div className="flex flex-col items-center">
        <Lottie
          animationData={error}
          style={{
            height: 400,
            width: 400,
          }}
        />
        <Link to={"/"} className="bg-black text-white  px-5 py-2">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
