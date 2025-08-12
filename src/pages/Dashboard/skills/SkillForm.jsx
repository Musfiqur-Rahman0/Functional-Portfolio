import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const SkillForm = ({ handlerFunc, selectedSkill, btnText }) => {
  const { handleSubmit, control, reset } = useForm({});

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
      type: "textarea",
    },
  ];

  useEffect(() => {
    if (selectedSkill) {
      reset({
        "Package Name": selectedSkill["Package Name"],
        "Repo Owner": selectedSkill["Repo Owner"],
        "Repo Name": selectedSkill["Repo Name"],
        Description: selectedSkill["Description"],
      });
    }
  }, [selectedSkill]);

  return (
    <form className="space-y-3" onSubmit={handleSubmit(handlerFunc)}>
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

      <Button className={"w-full "} type="submit">
        {btnText}
      </Button>
    </form>
  );
};

export default SkillForm;
