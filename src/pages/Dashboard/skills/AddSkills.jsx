import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Textarea } from "@headlessui/react";
import axios from "axios";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

export default function AddSkills() {
  const axiosSecure = useAxiosSecure();
  const fields = [
    {
      name: "Package Name",
      type: "text",
    },
    {
      name: "Repo Owner",
      type: "text",
    },
    {
      name: "Repo Name",
      type: "text",
    },
    {
      name: "Logo",
      type: "file",
    },
    {
      name: "Description",
      type: "texarea",
    },
  ];

  const { handleSubmit, control } = useForm({});

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
      toast.error("Failed!!! " + error.response.data.message);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add a New Skills</h2>
      {fields.map((filed, idx) => (
        <Controller
          key={filed.name || idx}
          name={filed.name}
          control={control}
          defaultValue={""}
          rules={{ required: `${filed.name} is required` }}
          render={({ fieldState, field }) => {
            return (
              <div className="space-y-2">
                <Label>{filed.name}</Label>

                {filed.type === "textarea" ? (
                  <Textarea
                    {...field}
                    className="w-full border rounded-md px-3 py-2"
                  />
                ) : filed.type === "file" ? (
                  <Input
                    type="file"
                    // contronal a file use korar time a obossoi field.onchange kore file take get korte hove e.target.files diye
                    onChange={(e) => field.onChange(e.target.files)}
                  />
                ) : (
                  <Input {...field} type={filed.type} />
                )}
                {fieldState.error && (
                  <p className="text-red-500 text-sm">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            );
          }}
        />
      ))}
      <Button className={"w-full "}>Add Skill</Button>
    </form>
  );
}
