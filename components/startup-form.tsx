"use client";
import React, { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { ZodError, z } from "zod";

import { formSchema } from "@/lib/validation";

import { Send } from "lucide-react";

import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const StartupForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = React.useState("");

  const handleSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };

      await formSchema.parseAsync(formValues);
      //   const result = await createPitch(prevState, formData, pitch);

      //   if (result.status == "SUCCESS") {
      //     toast({
      //       title: "Success",
      //       description: "Your startup has been created successfully!",
      //     });
      //     router.push(`/startup/${result.id}`)
      //   }
      //   return result
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldsError = error.flatten().fieldErrors;
        setErrors(fieldsError as unknown as Record<string, string>);
        toast({
          style: { backgroundColor: "darkred", color: "white" },
          title: "Error",
          description: "Please check your input and try again",
          variant: "destructive",
        });
        return { ...prevState, error: "Validation error", status: "ERROR" };
      }

      toast({
        style: { backgroundColor: "red" },
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      });
      return {
        ...prevState,
        error: "An unexpected error occurred",
        status: "ERROR",
      };
    }
  };
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    error: "",
    status: "INITIAL",
  });
  return (
    <form action={formAction} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <Input
          name="title"
          id="title"
          className="startup-form_input"
          placeholder="Enter startup title"
        />
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form_textarea"
          required
          placeholder="Startup Description"
        />

        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form_input"
          required
          placeholder="Startup Category (Tech, Health, Education...)"
        />

        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form_input"
          required
          placeholder="Startup Image URL"
        />

        {errors.link && <p className="startup-form_error">{errors.link}</p>}
      </div>
      <div data-color-mode="light">
        <label htmlFor="pitch" className="startup-form_label">
          Pitch
        </label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />

        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
      <Button
        type="submit"
        disabled={isPending}
        className="startup-form_btn text-white"
      >
        {isPending ? "Submitting....." : "Submit your pitch"}
        <Send className="size-6 ml-2" />
      </Button>
    </form>
  );
};

export default StartupForm;
