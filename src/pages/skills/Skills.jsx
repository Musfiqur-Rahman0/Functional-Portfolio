import { Card } from "@/components/ui/card";
import useCurd from "@/hooks/useCurd";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import SkillCard from "./SkillsCard";

const Skills = () => {
  const [skillStats, setSkillStats] = useState([]);

  const { read } = useCurd(`/stats`);
  const { data, isPending, isError } = read;

  useEffect(() => {
    if (data) {
      setSkillStats(data);
    }
  }, [data]);
  console.log(data);

  return (
    <div>
      <p>Skills page</p>
      {skillStats &&
        skillStats.map((skill, idx) => <SkillCard data={skill} key={idx} />)}
    </div>
  );
};

export default Skills;
