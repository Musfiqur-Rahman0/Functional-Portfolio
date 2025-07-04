import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants, whatsapp } from "@/consents/data";
import ProjectCard from "@/myComponents/ProjectCard";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import empty from "../assets/emptyFiles.json";
const ProjectsPage = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const projects = useLoaderData();
  const [projectsData, setProjectsData] = useState(projects);

  const isEven = (index) => {
    return index % 2 === 0;
  };

  // fetching category data from my fake data.
  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      setCategory(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // const filteredProjects = selectedCategory
  //   ? projects.filter(
  //       (project) =>
  //         project.category.trim().toLowerCase() ===
  //         selectedCategory.trim().toLowerCase()
  //     )
  //   : projects;

  const fetchProductsByCategory = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:5000/projects?category=${selectedCategory}`
      );
      const data = await res.json();
      setProjectsData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  useEffect(() => {
    fetchProductsByCategory();
  }, [selectedCategory]);

  console.log(selectedCategory);
  return (
    <div className="w-full ">
      <div className="text-center py-12 space-y-1">
        <h2 className=" text-3xl md:text-4xl xl:text-6xl font-bold  text-shadow-2xl">
          Crafted With Passion
        </h2>
        <p className="text-sm md:text-lg text-gray-400 ">
          Showcasing apps that merge creativity with functionality.
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold  ">PROJECTS</h2>
          <p className="text-[0.6rem] md:text-lg md:mt-2">
            Here are some of my projects that I have worked on.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {loading ? (
            <p>loading...</p>
          ) : (
            <>
              <Button
                onClick={() => setSelectedCategory("all")}
                variant="secondary"
                className="capitalize cursor-pointer text-[0.7rem]"
              >
                All
              </Button>
              {category?.map((c) => (
                <Button
                  key={c.id}
                  onClick={() => setSelectedCategory(c)}
                  variant="secondary"
                  className="capitalize cursor-pointer text-[0.7rem]"
                >
                  {c}
                </Button>
              ))}
            </>
          )}
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            staggerChildren: 0.3,
          },
        }}
        className="grid grid-cols-1 gap-10 p-3 md:p-0"
      >
        {projectsData.length !== 0 ? (
          projectsData?.map((project, index) => (
            //   <Projects project={project} order={isEven(index) ? "reversed" : ""} />
            <ProjectCard
              variant={itemVariants}
              key={project._id}
              project={project}
              reversed={isEven(index)}
            />
          ))
        ) : (
          <div className="py-10 flex items-center justify-center text-5xl">
            {/* <h2>NOthing heree</h2> */}
            <Lottie
              animationData={empty}
              style={{
                height: 500,
              }}
            />
          </div>
        )}
      </motion.div>

      <div className="py-12 text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold  text-shadow-2xl">
          Want to explore more? Let's build something amazing together
        </h2>
        <Button className="rounded-full cursor-pointer">
          <a href={whatsapp} target="_blank">
            Get In Touch
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsPage;
