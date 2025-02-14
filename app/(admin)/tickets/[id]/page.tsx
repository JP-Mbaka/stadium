import CreateTicketFormCard from "@/app/components/CreateTicketFormCard";
import { getSingleTicket } from "@/lib/actions/user/ticket.action";
import { Ticket } from "@/types";
import React from "react";

async function TicketsPage({ params }: { params: { id: string } }) {
  // console.log("Params:", params.id);
  const isNew: boolean = params.id === "new";
  let ticket: Ticket;

  if (!params?.id) {
    return <div>Error: No Item Not found</div>;
  }

  if (params?.id !== "new") {
    ticket = await getSingleTicket(params.id);
    if (!ticket) console.log("Error found:", ticket);
  }

  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>{isNew ? `Create New Ticket` : `Modify Ticket`}</h1>
        <h1>AdminView</h1>
      </div>
      <main className="h-[88vh] w-full flex justify-center px-24 pt-8">
        {/* <div>Forms {await params.id}</div> */}
        <CreateTicketFormCard isEdit={isNew} ticket={ticket!} />
      </main>
    </section>
  );
}

export default TicketsPage;
