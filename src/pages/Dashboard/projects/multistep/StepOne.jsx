import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function StepComponent({ fieldsData = {} }) {
  const { register } = useFormContext();

  return (
    <div className="space-y-4">
      {fieldsData?.fields?.map((field) => (
        <div key={field.name} className="space-y-1">
          <Label htmlFor={field.name}>{field.label}</Label>

          {field.type === "textarea" ? (
            <Textarea id={field.name} {...register(field.name)} />
          ) : field.type === "file" ? (
            <Input type="file" id={field.name} {...register(field.name)} />
          ) : field.type === "file-array" ? (
            <Input
              type="file"
              id={field.name}
              multiple
              {...register(field.name)}
            />
          ) : field.type === "array" ? (
            <Input
              id={field.name}
              placeholder="Comma-separated list"
              {...register(field.name)}
            />
          ) : (
            <Input
              type={field.type}
              id={field.name}
              {...register(field.name)}
            />
          )}
        </div>
      ))}
    </div>
  );
}
