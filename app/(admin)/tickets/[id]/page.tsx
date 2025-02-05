import CreateTicketFormCard from "@/app/components/CreateTicketFormCard";
import React from "react";

async function TicketsPage({ params }: { params: { id: string } }) {
  console.log("Params:", params.id);

  if (!(await params?.id)) {
    return <div>Error: No Item Not found</div>;
  }

  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>
          {(await params.id) === "new" ? `Create New Ticket` : `Modify Ticket`}
        </h1>
        <h1>AdminView</h1>
      </div>
      <main className="h-[88vh] w-full flex justify-center px-24 pt-8">
        {/* <div>Forms {await params.id}</div> */}
        <CreateTicketFormCard />
      </main>
    </section>
  );
}

export default TicketsPage;
