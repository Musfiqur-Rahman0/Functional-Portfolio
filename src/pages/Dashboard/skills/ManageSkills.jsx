import { Button } from "@/components/ui/button";
import useCurd from "@/hooks/useCurd";
import SharedTable from "@/pages/shared/SharedTable";

import React, { useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";
import SkillForm from "./SkillForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";

const ManageSkills = () => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const { read, deleteMutation, updateWithPatch } = useCurd("/skills");

  const { data, isPending, isError } = read;
  const { mutateAsync: deleteSkill, isPending: deleting } = deleteMutation;
  const { mutateAsync: updateSkill, isPending: updating } = updateWithPatch;

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "This action can't be reverted.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
        cancelButtonText: "Cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteSkill(id);
          if (res.deletedCount === 1) {
            Swal.fire({
              title: "Skill Deleted",
              text: "Skill has been deleted sucessfully",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      toast.error("Somthing wrong please try again");
    }
  };

  const handleUpdateSkill = async (data) => {
    data.updated_on = new Date().toISOString();

    const id = selectedSkill._id;

    if (!id) {
      Swal.fire("Something went worng", "Please try again", "error");
      return;
    }

    const file = data.Logo[0];
    if (!file) {
      toast.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );

      const logoUrl = res.data.data.display_url;
      data.Logo = logoUrl;

      const updatedSkill = {
        ...data,
      };

      const result = await updateSkill({ id, updatedItems: updatedSkill });
      if (result.success) {
        Swal.fire(
          "Skill Updated",
          "Skill has been updated Successfully",
          "success"
        );
      }
      setIsUpdating(false);
    } catch (error) {
      toast.error("Something went wrong please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleModalOpen = (skill) => {
    setIsUpdating(true);
    setSelectedSkill(skill);
  };

  const headItems = ["#", "Logo", "Package Name", "Repo owner", "Actions"];

  const bodyItems = data?.map((item, index) => ({
    cells: [
      index + 1,
      <figure>
        <img
          src={item["Logo"]}
          alt={item["Package Name"]}
          height={"50"}
          width={"50"}
        />
      </figure>,
      item["Package Name"],
      item["Repo Owner"] + "/" + item["Repo Name"],
      <div className="flex gap-2">
        <Button size="sm" onClick={() => handleModalOpen(item)}>
          Update
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => handleDelete(item._id)}
          disabled={deleting}
        >
          Remove
        </Button>
      </div>,
    ],
  }));

  if (isPending) return <p>Loading</p>;
  return (
    <div>
      <h2>Manage all Skills {data.length}</h2>

      <SharedTable headItems={headItems} bodyItems={bodyItems} />

      <Dialog open={isUpdating} onOpenChange={() => setIsUpdating(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Skill details</DialogTitle>
          </DialogHeader>
          <SkillForm
            handlerFunc={handleUpdateSkill}
            selectedSkill={selectedSkill}
            btnText="Update Skill"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ManageSkills;
