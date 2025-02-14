"use  client";
import { getSingleTicket } from "@/lib/actions/user/ticket.action";
import { Ticket } from "@/types";
import React from "react";
import HistoryButton from "./component/button";

type tParams = Promise<{ id: string }>;

async function DetailPage({ params }: { params: tParams }) {
  console.log("Params:", params);
  let ticket: Ticket;

  if (!(await (await params)?.id)) {
    return <div>Error: No Item Not found</div>;
  }

  if ((await (await params)?.id) !== "new") {
    ticket = await getSingleTicket(await (await params).id);
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
          <HistoryButton
            eventId={`${ticket!.$id}`}
            userId=""
            name=""
            ticket={ticket!.name}
            price={ticket!.price}
            status={ticket!.status}
            type={ticket!.type}
          />
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
