"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getLoggedInUser } from "@/lib/actions/user/auth.action";
import { SignUpParams } from "@/types";

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const route = usePathname;
  const router = useRouter();
  const [isDashboardRoute, setDashboardRoute] = useState(false);
  const [isTicketRoute, setTicketRoute] = useState(false);
  const [isHistoryRoute, setHistoryRoute] = useState(false);

  if (route.toString() === "/dashboard") {
    setDashboardRoute(true);
    setTicketRoute(false);
    setHistoryRoute(false);
  } else if (route.toString() === "/tickets") {
    setDashboardRoute(false);
    setTicketRoute(true);
    setHistoryRoute(false);
  } else if (route.toString() === "/history") {
    setDashboardRoute(false);
    setTicketRoute(false);
    setHistoryRoute(true);
  } else {
    console.log(route.toString());
  }

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      // console.log("Program started");
      const res: SignUpParams = await getLoggedInUser();

      if (!res) router.replace("login");
    };

    fetchLoggedInUser();
  });
  return (
    <section className="w-screen h-screen flex">
      <section className="h-full max-w-60 border border-r-emerald-800 ">
        <div className="p-4 flex justify-center items-center border border-b-emerald-800">
          <Link href={"/"}>
            <div className="flex items-center gap-2 ">
              <div className="dark:bg-emerald-800 rounded-full p-1  w-auto">
                <Image src="/stadium.png" alt="logo" height={50} width={60} />
              </div>
              <h1 className="font-mochiyPopOne font-bold dark:text-slate-300 text-emerald-800 text-2xl pt-1 px-2">
                Stadium
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <Link
            href={"/dashboard"}
            className={`py-2 px-4 ${
              isDashboardRoute && "active:justify-center active:bg-emerald-800 "
            } hover:justify-center flex gap-2 hover:bg-emerald-800 font-poppins hover:text-slate-100`}
          >
            <Image src="/dashboard.svg" alt="logo" height={25} width={20} />
            <h2> Dashboard</h2>
          </Link>
          <Link
            href={"/tickets"}
            className={`py-2 px-4 ${
              isTicketRoute && "active:justify-center active:bg-emerald-800 "
            } hover:justify-center flex gap-2 hover:bg-emerald-800 font-poppins hover:text-slate-100`}
          >
            <Image src="/ticket.svg" alt="logo" height={25} width={20} />
            <h2> Tickets</h2>
          </Link>
          <Link
            href={"/history"}
            className={`py-2 px-4 ${
              isHistoryRoute && "active:justify-center active:bg-emerald-800 "
            } hover:justify-center flex gap-2 hover:bg-emerald-800 font-poppins hover:text-slate-100`}
          >
            <Image src="/history.svg" alt="logo" height={25} width={20} />
            <h2> History</h2>
          </Link>
        </div>
      </section>
      <section className="w-[100%] h-[100%]">{children}</section>
    </section>
  );
}

export default RootLayout;
