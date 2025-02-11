import { getSingleTicket } from "@/lib/actions/user/ticket.action";
import { Ticket } from "@/types";
import React from "react";

async function DetailPage({ params }: { params: { id: string } }) {
  console.log("Params:", params);
  let ticket: Ticket;

  if (!(await params?.id)) {
    return <div>Error: No Item Not found</div>;
  }

  if ((await params?.id) !== "new") {
    ticket = await getSingleTicket(await params.id);
    if (!ticket) console.log("Error found:", ticket);
  }

  return (
    <div className="flex flex-col px-24">
      <div className="flex flex-col justify-between h-[80svh] ">
        <div className="flex flex-col">
          <div className="bg-emerald-800 h-80 w-full"></div>
          <h2 className="py-4 font-semibold font-montserratAlt text-lg text-left text-emerald-800">
            {ticket!.type} | <span className="font-bold">{ticket!.name}</span>
          </h2>
          <p className="text-justify">
            Event description:&nbsp;{ticket!.description}
          </p>
        </div>
        <div className="flex justify-end items-center gap-8">
          <h1 className="text-3xl text-emerald-800 font-extrabold">
            &#x20A6;{ticket!.price}
          </h1>
          <button className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md">
            Buy Ticket
          </button>
        </div>
      </div>
      {/* <div>DetailPage{await params?.id}</div> */}
    </div>
  );
}

export default DetailPage;

// export default async function Page({ params }: { params: { id: string } }) {
//   return <div>My Post: {await params.id}</div>;
// }
