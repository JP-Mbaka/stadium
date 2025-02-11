"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TicketingTable from "./components/Ticketingtable";
import { Ticket } from "@/types";
import { getTicket } from "@/lib/actions/user/ticket.action";

function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchALLTickets = async () => {
      // console.log("Program started");
      const res: Ticket[] = await getTicket();

      setTickets(res);

      console.log("Tickets Homepage:", res[0].name);
    };

    fetchALLTickets();
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>Tickets</h1>
        <h1>AdminView</h1>
      </div>
      <div className="relative overflow-y-auto">
        <div className="px-4 h-[85vh]">
          <TicketingTable tickets={tickets} />
        </div>
        <div className="flex justify-end px-4">
          <Link
            href={"/tickets/new"}
            className="max-sm:hidden border border-emerald-800 text-emerald-800 font-poppins px-2 py-2 rounded-md"
          >
            Create Tickets
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TicketsPage;
