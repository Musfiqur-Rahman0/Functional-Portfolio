import PaginationComp from "@/components/shared/PaginationComp";
import { Button } from "@/components/ui/button";
import useCurd from "@/hooks/useCurd";
import usePaginate from "@/hooks/usePaginate";
import SharedTable from "@/pages/shared/SharedTable";

import React, { useEffect, useState } from "react";

const ManageProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;
  const { data: projects = [], totalPage } = usePaginate(
    "/projects",
    currentPage,
    limit
  );
  const headItems = ["#", "Name", "Type", "Category", "Actions"];

  const bodyItems = projects?.map((project, index) => ({
    cells: [
      index + 1,
      project.name || "N/A",
      project.type,
      project.category,
      <div className="flex gap-2">
        <Button
          size="sm"

          // onClick={() => handleApprove(project)}
          // disabled={approveMutation.isPending}
        >
          Update
        </Button>
        <Button
          variant="destructive"
          size="sm"
          // onClick={() => handleReject(project)}
          // disabled={approveMutation.isPending}
        >
          Remove
        </Button>
      </div>,
    ],
  }));

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-semibold">
          Manage all Project ({projects.length})
        </h2>
      </div>

      <SharedTable headItems={headItems} bodyItems={bodyItems} />

      {totalPage > 1 && (
        <PaginationComp
          currentPage={currentPage}
          totalPages={totalPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ManageProjects;
