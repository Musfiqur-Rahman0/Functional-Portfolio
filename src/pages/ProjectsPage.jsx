import { Button } from "@/components/ui/button";
import ProjectCard from "@/myComponents/ProjectCard";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const ProjectsPage = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const projects = useLoaderData();

  const isEven = (index) => {
    return index % 2 === 0;
  };

  // fetching category data from my fake data.
  const fetchCategoryData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/category.json");
      const data = await res.json();
      setCategory(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const filteredProjects = selectedCategory
    ? projects.filter(
        (project) =>
          project.category.trim().toLowerCase() ===
          selectedCategory.trim().toLowerCase()
      )
    : projects;

  useEffect(() => {
    fetchCategoryData();
  }, []);

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-bold  ">PROJECTS</h2>
          <p className=" text-lg mt-2">
            Here are some of my projects that I have worked on.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {loading ? (
            <p>loading...</p>
          ) : (
            category?.map((c) => (
              <Button
                key={c.id}
                onClick={() => setSelectedCategory(c.name)}
                variant="secondary"
                className="capitalize cursor-pointer"
              >
                {c.name}
              </Button>
            ))
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-10">
        {filteredProjects.length !== 0 ? (
          filteredProjects.map((project, index) => (
            //   <Projects project={project} order={isEven(index) ? "reversed" : ""} />
            <ProjectCard
              key={index}
              project={project}
              reversed={isEven(index)}
            />
          ))
        ) : (
          <div className="h-full w-full flex items-center justify-center text-5xl">
            NOthing heree
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
