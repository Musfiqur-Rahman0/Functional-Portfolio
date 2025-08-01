import useCurd from "@/hooks/useCurd";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectsCard";
import PaginationComp from "@/components/shared/PaginationComp";
import usePaginate from "@/hooks/usePaginate";
import ProjectCardSkeleton from "./ProjectCardSkeleton ";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const limit = 3;

  const {
    data: projects = [],
    totalPage,
    isPending,
    isError,
  } = usePaginate("/projects", currentPage, limit);

  useEffect(() => {
    setLoading(isPending);
  }, [isPending]);

  return (
    <div>
      <h2>Projects page</h2>
      <div className="grid  gap-3 w-full">
        {loading ? (
          <>
            <ProjectCardSkeleton />
            <ProjectCardSkeleton reversed={true} />
            <ProjectCardSkeleton />
          </>
        ) : (
          projects?.map((project, index) => (
            <ProjectCard
              project={project}
              key={project._id}
              reversed={index % 2 === 0} // only the even number is reversed
            />
          ))
        )}
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
