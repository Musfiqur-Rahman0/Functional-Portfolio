import useCurd from "@/hooks/useCurd";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectsCard";
import PaginationComp from "@/components/shared/PaginationComp";
import usePaginate from "@/hooks/usePaginate";
import ProjectCardSkeleton from "./ProjectCardSkeleton ";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 3;

  const {
    data: projects = [],
    totalPage,
    isPending,
    isError,
  } = usePaginate("/projects", currentPage, limit);

  return (
    <div className="space-y-5 ">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold   mb-1 border-l-8 px-4 border-primary">
          Unknown but Mine
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8">
          Some projects are small, but they carry a world to me.
        </p>
      </div>
      <div className="grid  gap-3 w-full">
        {isPending
          ? [...Array(3)].map((_, idx) => (
              <ProjectCardSkeleton reversed={idx % 2 === 0} key={idx} />
            ))
          : projects?.map((project, index) => (
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
