"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createFormSchema } from "../../types";
import TicketsCustomInput from "./ui/ticketsCustomInput";

function CreateTicketFormCard() {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: "",
      price: "0",
      type: "",
      category: "",
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof createFormSchema>) {
    console.log("GGGHHGHH:", data);
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col justify-between"
        >
          <div className="flex flex-col gap-5">
            <TicketsCustomInput
              name="name"
              control={form.control}
              label="Ticket"
              placeholder="Enter Ticket name"
            />
            <TicketsCustomInput
              name="price"
              control={form.control}
              label="Price"
              placeholder="Enter price name"
            />
            <TicketsCustomInput
              name="type"
              control={form.control}
              label="Type"
              placeholder="E.g., Event or Sport"
            />
            <TicketsCustomInput
              name="category"
              control={form.control}
              label="Category"
              placeholder="E.g., VIP, Regular"
            />
            <TicketsCustomInput
              name="description"
              control={form.control}
              label="Description"
              placeholder="Describe the events/sports"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="max-sm:hidden border border-emerald-800 text-emerald-800 font-poppins px-2 py-2 rounded-md"
            >
              Create Tickets
            </button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default CreateTicketFormCard;
