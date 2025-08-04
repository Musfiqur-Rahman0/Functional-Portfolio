import useCurd from "@/hooks/useCurd";
import React, { useState } from "react";
import SkillCard from "./SkillsCard";
import SkillCardSkeleton from "./SkillCardSkeleton";

const Skills = () => {
  const { read } = useCurd("/skills");
  const { data: skills = [], isPending, isError } = read;

  return (
    <div className="w-full space-y-5">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold   mb-1 border-l-8 px-4 border-primary">
          My Development Stack
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          A curated collection of the technologies, libraries, and tools I use
          to craft performant and scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {isPending
          ? [...Array(6)].map((_, idx) => <SkillCardSkeleton key={idx} />)
          : skills?.map((skill) => <SkillCard data={skill} />)}
      </div>
    </div>
  );
};

export default Skills;
