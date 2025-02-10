import { createFormSchema } from "@/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";

// const FormSchema = createFormSchema;

interface CustomInputTypes {
  control: Control<z.infer<typeof createFormSchema>>;
  name: FieldPath<z.infer<typeof createFormSchema>>;
  placeholder: string;
  label: string;
}

function TicketsCustomInput({
  control,
  name,
  placeholder,
  label,
}: CustomInputTypes) {
  console.log(createFormSchema);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={name.match("price") ? "number" : "text"}
              placeholder={placeholder}
              className="p-3"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TicketsCustomInput;
