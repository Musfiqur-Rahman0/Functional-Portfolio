import React from "react";
import Card from "./Card";
import BackgroundCirlcle from "../BackgroundCirlcle";

const ExpriencesCard = () => {
  return (
    <div className="grid  md:grid-cols-2 gap-10 mt-10 relative ">
      {/* background circle */}
      <BackgroundCirlcle />
      <Card position="top-left" />
      <Card position="bottom-left" />
      <Card position="top-right" />
      <Card position="bottom-right" />
    </div>
  );
};

export default ExpriencesCard;
