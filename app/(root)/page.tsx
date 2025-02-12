"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ticket } from "../../types";
import ActivityComponents from "../components/ActivityComponents";
import { getTicket } from "@/lib/actions/user/ticket.action";

// const eventsList: MyEvents[] = [
//   { title: "Johnny Depp", date: "Mon 16/02/25", price: 6000, rate: 3.5 },
//   { title: "Houston Right", date: "Tues 16/02/25", price: 3000, rate: 3.5 },
//   { title: "AFRIMAA", date: "Wed 16/02/25", price: 2500, rate: 3.5 },
//   { title: "OSCAR AWARD", date: "Thurs 16/02/25", price: 1500, rate: 3.5 },
// ];
const Home = () => {
  const [ticketList, setTicketList] = useState<Ticket[]>();
  const [eventList, setEventList] = useState<Ticket[]>();
  const [sportList, setSportList] = useState<Ticket[]>();

  useEffect(() => {
    const fetchTickets = async () => {
      const res = await getTicket();

      if (!res) console.log("Error here  oooooooo:", res);

      setTicketList(res);
      setEventList(
        res.filter((val: Ticket) => val.type.toLowerCase() === "event")
      );
      console.log("Wonders:", eventList);
      setSportList(
        res.filter((val: Ticket) => val.type.toLowerCase() === "sport")
      );
      console.log("Wonders:", sportList);
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <div className="flex justify-center w-full max-sm:hidden">
        <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
          <input placeholder="search" className="sm:w-[450px] bg-slate-100" />
          <Image src="/search.png" alt="Vercel logo" height={25} width={25} />
        </div>
      </div>

      <ActivityComponents name="Tickets" activity={ticketList} />
      <ActivityComponents name="Events" activity={eventList} />
      <ActivityComponents name="Sports" activity={sportList} />
    </div>
  );
};

export default Home;
