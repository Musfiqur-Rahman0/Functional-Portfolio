import React from "react";
import forbiddenAni from "../../assets/Page Not Found 404.json";
import Lottie from "lottie-react";

const Forbidden = () => {
  return <Lottie animationData={forbiddenAni} />;
};

export default Forbidden;
