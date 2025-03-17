"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import FooterComponent from "../components/FooterComponent";
import { getLoggedInUser } from "@/lib/actions/user/auth.action";
import { HistoryProps, SignUpParams } from "@/types";
import { getSingleHistory } from "@/lib/actions/user/history.action";
import { useRouter } from "next/navigation";

function HomePage() {
  const [user, setUser] = useState<SignUpParams>();
  const [histories, setHistory] = useState<HistoryProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    // console.log("Program Entry");

    const fetchLoggedInUser = async () => {
      // console.log("Program started");
      const res: SignUpParams = await getLoggedInUser();

      if (!res) router.replace("login");

      setUser(res);

      console.log("User Homepage:", user!.firstName);
      fetchALLHistory();
    };

    const fetchALLHistory = async () => {
      console.log("Program started:", user);
      //userId
      const res: HistoryProps[] = await getSingleHistory(`${user?.$id}`);

      setHistory(res);

      // console.log("Tickets Homepage:", res[0].ticket);
    };

    fetchLoggedInUser();
  }, [user, histories]);

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
          {!histories || histories.length === 0 ? (
            <div className="flex justify-center items-center h-full bg-emerald-50">
              No Record Found
            </div>
          ) : (
            histories.map((item, index) => (
              <UserCard
                key={index}
                name={item.name}
                eventId={item.eventId}
                ticket={item.ticket}
                userId={item.userId}
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
