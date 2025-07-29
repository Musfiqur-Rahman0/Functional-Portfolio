"use client";

import React, { useState } from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import StepComponent from "./multistep/StepOne";

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
    title: "Video Information",
    fields: [
      { name: "videoUrl", label: "Video URL", type: "url" },
      { name: "videoSize", label: "Video Size (MB)", type: "number" },
      { name: "videoDuration", label: "Video Duration (sec)", type: "number" },
    ],
  },
  {
    step: 4,
    title: "Content",
    fields: [
      { name: "technologies", label: "Technologies Used", type: "array" },
      { name: "features", label: "Features", type: "array" },
      { name: "description", label: "Project Description", type: "textarea" },
    ],
  },
  {
    step: 5,
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
    step: 6,
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
  const methods = useForm();

  const fieldData = formSteps[step];
  const nextStep = () => setStep((s) => Math.min(s + 1, formSteps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const onSubmit = (data) => {
    console.log("Project Data:", data);
  };

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
            <Button type="submit">Submit</Button>
          )}
        </div>

        {/* Progress Bar (optional) */}
      </form>
    </FormProvider>
  );
};

export default AddProjects;
