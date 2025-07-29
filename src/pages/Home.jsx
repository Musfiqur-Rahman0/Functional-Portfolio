import HeroSection from "@/components/hero/HeroSection";
import { Button } from "@/components/ui/button";
import { blurVariant } from "@/consents/data";
import useCurd from "@/hooks/useCurd";
import { motion } from "framer-motion";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ProjectCard from "./projects/ProjectsCard";

const Home = () => {
  const navigate = useNavigate();
  const limit = 3;
  const [projects, setProjects] = useState([]);
  const { read } = useCurd(`/projects?limit=${limit}`);
  const { data: response, isPending, isError } = read;

  useEffect(() => {
    if (response) {
      setProjects(response.data);
    }
  }, [response]);

  return (
    <div>
      <div className=" mx-auto px-4 py-2  space-y-24">
        <HeroSection />
        <section id="projects" className="space-y-20">
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-primary text-center">
            PROJECTS
          </h2>

          {projects.map((project, index) => (
            <ProjectCard
              project={project}
              reversed={index % 2 === 0}
              key={project._id}
            />
          ))}
          <div className="flex items-center justify-center">
            <Button
              onClick={() => navigate("/projects")}
              className="cursor-pointer rounded-full "
            >
              View More
            </Button>
          </div>
        </section>
        <section id="expriences">
          <h2 className="text-2xl font-bold text-primary text-center">
            WORK EXPRIENCES
          </h2>
          {/* <Expriences /> */}
          {/* <ExpriencesCard /> */}
        </section>
        <section id="tech" className="mt-40 space-y-24">
          <motion.div
            variants={blurVariant}
            initial="hidden"
            whileInView="visible"
            transition={{
              duration: 0.8,
            }}
          >
            <div className="w-full px-4 md:px-0 md:max-w-[70%] text-center mx-auto space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                I'm currently looking to join a{" "}
                <span className="text-blue-800">cross-functional</span> team
              </h2>
              <p className="text-[0.7rem] md:text-xl">
                {" "}
                that values improving people's lives through accessible Web App{" "}
              </p>
            </div>
            {/* <Technologies /> */}
          </motion.div>
          <div className="max-w-[70%] mx-auto"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
