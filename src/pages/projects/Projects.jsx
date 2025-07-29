import useCurd from "@/hooks/useCurd";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectsCard";
import PaginationComp from "@/components/shared/PaginationComp";
import usePaginate from "@/hooks/usePaginate";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 3;

  const { data: projects = [], totalPage } = usePaginate(
    "/projects",
    currentPage,
    limit
  );
  return (
    <div>
      <h2>Projects page</h2>
      <div className="grid  gap-3 ">
        {projects?.map((project, index) => (
          <ProjectCard
            project={project}
            key={project._id}
            reversed={index % 2 === 0} // only the even number is reversed
          />
        ))}
      </div>

      {totalPage > 1 && (
        <div className="flex items-center justify-center mt-5">
          <PaginationComp
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPage}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
