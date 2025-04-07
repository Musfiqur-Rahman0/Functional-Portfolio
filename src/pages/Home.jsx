import Expriences from "@/myComponents/Expriences";
import HeroSection from "@/myComponents/HeroSection";
import ProjectCard from "@/myComponents/ProjectCard";
import Technologies from "@/myComponents/Technologies";

import React, { use } from "react";

const Home = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto px-4 py-2 mt-10 space-y-16">
        <HeroSection />
        <section id="projects">
          <h2 className="text-2xl font-bold text-primary text-center">
            PROJECTS
          </h2>
          <div className="flex items-center justify-center gap-5">
            <ProjectCard
              name="html tutorial"
              image="/src/assets/project-thumbnail-1.png"
            />
            <ProjectCard
              name="css tutorial"
              image="/src/assets/project-thumbnail-2.png"
            />
          </div>
        </section>
        <section id="expriences">
          <h2 className="text-2xl font-bold text-primary text-center">
            EXPRIENCES
          </h2>
          <Expriences />
        </section>
        <section id="tech">
          <h2 className="text-2xl font-bold text-primary text-center">
            EXPRIENCES WITH
          </h2>
          <Technologies />
        </section>
      </div>
    </div>
  );
};

export default Home;
