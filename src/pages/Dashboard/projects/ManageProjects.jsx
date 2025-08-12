import PaginationComp from "@/components/shared/PaginationComp";
import { Button } from "@/components/ui/button";
import useCurd from "@/hooks/useCurd";
import usePaginate from "@/hooks/usePaginate";
import SharedTable from "@/pages/shared/SharedTable";

import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10;

  const { deleteMutation } = useCurd("/projects");
  const { mutateAsync: deleteProject, isPending: deletingProjects } =
    deleteMutation;
  const { data: projects = [], totalPage } = usePaginate(
    "/projects",
    currentPage,
    limit
  );

  const handleDeleteProject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("deleted!!");
        const res = await deleteProject(id);
        if (res.deletedCount === 1) {
          toast.success("Project has been deleted!!!");
        } else {
          toast.error("Failed!, Please try again.");
        }
      }
    });
  };

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
          onClick={() => handleDeleteProject(project._id)}
          disabled={deletingProjects}
        >
          {deletingProjects ? "Removing..." : " Remove"}
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
