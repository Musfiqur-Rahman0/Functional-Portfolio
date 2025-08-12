"use client";

import React, { useEffect, useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import StepComponent from "./multistep/StepOne";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { uploadImage } from "@/lib/utils";
import useCurd from "@/hooks/useCurd";
import { useNavigate } from "react-router";

const formSteps = [
  {
    step: 1,
    title: "Basic Information",
    fields: [
      { name: "name", label: "Project Name", type: "text" },
      { name: "type", label: "Project Type", type: "text" },
      { name: "category", label: "Category", type: "text" },
      { name: "purpose", label: "Purpose", type: "text" },
    ],
  },
  {
    step: 2,
    title: "Links",
    fields: [
      { name: "live", label: "Live Link", type: "url" },
      { name: "github", label: "GitHub Repository", type: "url" },
    ],
  },

  {
    step: 3,
    title: "Content",
    fields: [
      { name: "technologies", label: "Technologies Used", type: "array" },
      { name: "features", label: "Features", type: "array" },
      { name: "description", label: "Project Description", type: "textarea" },
    ],
  },
  {
    step: 4,
    title: "Images",
    fields: [
      { name: "projectImage", label: "Main Project Image", type: "file" },
      {
        name: "detailImages",
        label: "Detail Images",
        type: "file-array",
        multiple: true,
      },
    ],
  },
  {
    step: 5,
    title: "Process",
    fields: [
      { name: "projectGoals", label: "Project Goals", type: "textarea" },
      {
        name: "developmentProcess",
        label: "Development Process",
        type: "textarea",
      },
    ],
  },
];

const AddProjects = () => {
  const [step, setStep] = useState(0);
  const [detailsImages, setDetailImages] = useState([]);
  const methods = useForm();
  const navigate = useNavigate();
  const { create } = useCurd("/projects");

  const { mutateAsync: addProject } = create;

  const fieldData = formSteps[step];
  const nextStep = () => setStep((s) => Math.min(s + 1, formSteps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = async (data) => {
    console.log("Project Data:", data);

    const technologies = data.technologies.split(",");
    const features = data.features.split(",");

    try {
      const file = data.projectImage[0];

      const projectImageurl = await uploadImage(file);

      data.projectImage = projectImageurl;
      data.features = features;
      data.technologies = technologies;
      data.detailImages = detailsImages;
      data.addedOn = new Date().toISOString();

      const res = await addProject(data);
      console.log(res);
      if (res.insertedId) {
        toast.success("New Projects Added Successfully!!");
        methods.reset();
        navigate("/dashboard/projects");
      }
    } catch (error) {
      toast.error("Failed to add Projects");
    }
  };

  // TODO I HAVE TO SHOW THE ADDED IMAGES ON THE UI
  // uploading the image when changing the file.

  const imageFile = methods.watch("detailImages");
  useEffect(() => {
    const upload = async () => {
      if (imageFile?.[0]) {
        const file = imageFile[0];
        const photourl = await uploadImage(file);
        setDetailImages((prev) => [...prev, photourl]);
      }
    };

    upload();
  }, [imageFile]);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-[90%] max-w-5xl mx-auto p-6 space-y-6 bg-white shadow-lg rounded-xl border border-primary"
      >
        <h2 className="text-3xl font-semibold">
          Add New Projects -
          <span className="text-xl font-semibold"> {fieldData.title}</span>
        </h2>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          {/* <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          /> */}
          <Progress value={((step + 1) / formSteps.length) * 100} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <StepComponent fieldsData={fieldData} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          {step > 0 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Back
            </Button>
          )}
          {step < formSteps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-primary text-white"
            >
              Submit
            </button>
          )}
        </div>

        {/* Progress Bar (optional) */}
      </form>
    </FormProvider>
  );
};

export default AddProjects;
