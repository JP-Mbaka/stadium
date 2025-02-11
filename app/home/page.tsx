"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import FooterComponent from "../components/FooterComponent";
import { getLoggedInUser } from "@/lib/actions/user/auth.action";
import { SignUpParams, Ticket } from "@/types";
import { getTicket } from "@/lib/actions/user/ticket.action";

function HomePage() {
  const [user, setUser] = useState<SignUpParams>();
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    // console.log("Program Entry");

    const fetchLoggedInUser = async () => {
      // console.log("Program started");
      const res: SignUpParams = await getLoggedInUser();

      setUser(res);

      console.log("User Homepage:", user?.firstName);
    };

    const fetchALLTickets = async () => {
      // console.log("Program started");
      const res: Ticket[] = await getTicket();

      setTickets(res);

      console.log("Tickets Homepage:", res[0].name);
    };

    fetchLoggedInUser();
    fetchALLTickets();
  }, [user, tickets]);

  return (
    <>
      <section className="h-screen px-24 py-4">
        <header className="bg-emerald-800 h-80 flex justify-between items-center px-12">
          <div className="flex items-center gap-5">
            <div className="bg-white rounded-full h-28 w-28"></div>
            <div>
              <h2 className="text-slate-200 text-2xl font-mochiyPopOne font-semibold">
                {user?.firstName} {user?.lastName}
              </h2>
              <span className="font-light font-mono text-green-300">
                {user?.state}, {user?.country}
              </span>
            </div>
          </div>
          <div>
            <Link
              href={"/"}
              className="max-sm:hidden border border-green-300 text-green-300 font-poppins px-2 py-2 rounded-md"
            >
              Market Place
            </Link>
          </div>
        </header>
        <section className="relative overflow-y-auto h-[65%]">
          {!tickets || tickets.length === 0 ? (
            <div className="flex justify-center items-center h-full bg-emerald-50">
              No Record Found 
            </div>
          ) : (
            tickets.map((item, index) => (
              <UserCard
                key={index}
                name={item.name}
                category={item.category}
                description={item.description}
                price={item.price}
                type={item.type}
                status={item.status}
              />
            ))
          )}
        </section>
      </section>
      <FooterComponent />
    </>
  );
}

export default HomePage;
