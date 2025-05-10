import Exprience from "@/myComponents/Exprience";
import Expriences from "@/myComponents/Expriences";
import ExpriencesCard from "@/myComponents/Expriences/ExpriencesCard";
import HeroSection from "@/myComponents/HeroSection";
import ProjectCard from "@/myComponents/ProjectCard";
import Projects from "@/myComponents/Projects";
import Technologies from "@/myComponents/Technologies";

import React, { use } from "react";

const Home = () => {
  return (
    <div>
      <div className=" mx-auto px-4 py-2 mt-10 space-y-16">
        <HeroSection />
        <section id="projects">
          <h2 className="text-2xl font-bold text-primary text-center">
            PROJECTS
          </h2>
          {/* <div className="flex items-center justify-center gap-5">
            <ProjectCard
              name="html tutorial"
              image="/src/assets/project-thumbnail-1.png"
            />
            <ProjectCard
              name="css tutorial"
              image="/src/assets/project-thumbnail-2.png"
            />
          </div> */}
          <Projects />
          <Projects order={"reversed"}/>
        </section>
        <section id="expriences">
          <h2 className="text-2xl font-bold text-primary text-center">
            WORK EXPRIENCES
          </h2>
          {/* <Expriences /> */}
          <ExpriencesCard/>
        </section>
        <section id="tech" className="mt-40 space-y-24">
          <div>
          <div className="max-w-[70%] text-center mx-auto space-y-2">
          <h2 className="text-3xl font-bold text-white text-center">
          I'm currently looking to join a <span className="text-blue-800">cross-functional</span> team
         
          </h2>
          <p className="text-xl"> that values improving  people's lives through accessible design </p>
          </div>
          <Technologies />
          </div>
          <div className="max-w-[70%] mx-auto">

          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
