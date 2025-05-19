import { Button } from "@/components/ui/button";
import { blurVariant } from "@/consents/data";
import Exprience from "@/myComponents/Exprience";
import Expriences from "@/myComponents/Expriences";
import ExpriencesCard from "@/myComponents/Expriences/ExpriencesCard";
import HeroSection from "@/myComponents/HeroSection";
import ProjectCard from "@/myComponents/ProjectCard";
import Projects from "@/myComponents/Projects";
import Technologies from "@/myComponents/Technologies";
import { motion } from "framer-motion";

import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Home = () => {
  const projects = useLoaderData();
  const navigate = useNavigate();

  motion;
  return (
    <div>
      <div className=" mx-auto px-4 py-2  space-y-24">
        <HeroSection />
        <section id="projects" className="space-y-20">
          <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold text-primary text-center">
            PROJECTS
          </h2>

          {projects.slice(0, 2).map((project, index) => (
            <Projects
              project={project}
              key={index}
              order={index === 1 ? "reversed" : ""}
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
          <ExpriencesCard />
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
            <div className="max-w-[70%] text-center mx-auto space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
                I'm currently looking to join a{" "}
                <span className="text-blue-800">cross-functional</span> team
              </h2>
              <p className="text-xl">
                {" "}
                that values improving people's lives through accessible Web App{" "}
              </p>
            </div>
            <Technologies />
          </motion.div>
          <div className="max-w-[70%] mx-auto"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
