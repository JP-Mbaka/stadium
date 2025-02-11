"use client";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createFormSchema, Ticket } from "../../types";
import TicketsCustomInput from "./ui/ticketsCustomInput";
import { createTicket, editTicket } from "@/lib/actions/user/ticket.action";
import { useRouter } from "next/navigation";
declare interface CreateTicketFormProps {
  isEdit: boolean;
  ticket?: Ticket;
}

function CreateTicketFormCard({ isEdit, ticket }: CreateTicketFormProps) {
  // const [isEdit, setIsEdit] = useState(false);

  // if (_ticket) setIsEdit(true);

  const router = useRouter();
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      name: isEdit === false ? ticket?.name : "",
      price: isEdit === false ? `${ticket?.price}` : "0",
      type: isEdit === false ? ticket?.type : "",
      category: isEdit === false ? ticket?.category : "",
      description: isEdit === false ? ticket?.description : "",
    },
  });

  async function onSubmit(data: z.infer<typeof createFormSchema>) {
    if (isEdit === false) {
      const res = await editTicket({
        tid: `${ticket?.$id}`,
        name: data.name,
        category: data.category,
        description: data.description,
        price: +data.price,
        status: "Active",
        type: data.type,
      });

      if (!res) return;

      console.log("Ticket created successfully:", res);
      router.push("/tickets");
    } else {
      const res = await createTicket({
        name: data.name,
        category: data.category,
        description: data.description,
        price: +data.price,
        status: "Active",
        type: data.type,
      });

      if (!res) return;

      console.log("Ticket created successfully:", res);
      router.push("/tickets");
    }
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
              {isEdit ? "Create" : "Edit"} Tickets
            </button>
          </div>
        </form>
      </Form>
    </>
  );
}

export default CreateTicketFormCard;
