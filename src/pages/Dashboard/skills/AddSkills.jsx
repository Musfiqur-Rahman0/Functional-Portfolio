import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";
import React from "react";
import { toast } from "sonner";
import SkillForm from "./SkillForm";

export default function AddSkills() {
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    const file = data.Logo[0];

    if (!file) {
      console.error("No file selected");
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

      const newSkill = {
        ...data,
      };
      const response = await axiosSecure.post("/skills", newSkill);
      if (response.status === 201) {
        toast.success("Sucess!!! New Skills Added sucessfully");
      }
    } catch (error) {
      toast.error("Failed!!! " + error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h2>Add a New Skills</h2>
      <SkillForm handlerFunc={onSubmit} btnText="Add Skill" />
    </div>
  );
}
