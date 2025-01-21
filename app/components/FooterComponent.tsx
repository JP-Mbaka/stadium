import React from "react";
import Image from "next/image";
import { navLinkData, socialLinkData } from "../constants/data";
import Link from "next/link";
import { NavLinkProps } from "../constants";

const FooterComponent = () => {
  return (
    <footer className="bg-emerald-800 w-full h-40 py-4 px-24 flex justify-evenly">
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="dark:bg-emerald-800 bg-white rounded-full p-1">
            <Image src="/stadium.png" alt="logo" height={45} width={40} />
          </div>
          <h1 className="font-mochiyPopOne font-bold dark:text-slate-300 text-white text-2xl px-2">
            Stadium
          </h1>
        </div>
        <div className="flex gap-4 font-semibold">
          {socialLinkData.map((data) => (
            <div
              key={data.link}
              className="rounded-full px-4 py-2 bg-white sha"
            >
              {data.link[0]}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
          <input placeholder="search" className="sm:w-[450px] bg-slate-100" />
          <Image src="/vercel.svg" alt="Vercel logo" height={25} width={25} />
        </div>
        <div className="flex items-center">
          <ul className="flex justify-evenly gap-8 w-[350px] pointer-events-auto">
            {navLinkData.map((data: NavLinkProps) => (
              <li
                key={data.link}
                className="font-poppins text-lg text-slate-100"
              >
                <Link href={data.linkURL}>{data.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
