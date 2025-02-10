"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import FooterComponent from "../components/FooterComponent";
import { getLoggedInUser } from "@/lib/actions/user/auth.action";
import { SignUpParams } from "@/types";

function HomePage() {
  const [user, setUser] = useState<SignUpParams>();

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      setUser(JSON.parse(await getLoggedInUser()));
    };

    fetchLoggedInUser();
  }, [user]);
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
                Lagos State, Nigeria
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
          {["tes", "fr", "ef", "gr"].map((item, index) => (
            <UserCard key={index} />
          ))}
        </section>
      </section>
      <FooterComponent />
    </>
  );
}

export default HomePage;
