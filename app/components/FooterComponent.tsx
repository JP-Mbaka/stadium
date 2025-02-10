import React from "react";
import Image from "next/image";
import { navLinkData, socialLinkData } from "../constants/data";
import Link from "next/link";
import { NavLinkProps } from "../../types";

const FooterComponent = () => {
  return (
    <footer className="bg-emerald-800 w-full h-40 max-sm:h-80 py-4 px-24 flex justify-evenly max-sm:flex-col-reverse">
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
            <div key={data.link} className="rounded-full p-2 bg-white sha">
              <Image
                src={data.linkImg!}
                alt={data.link}
                width={25}
                height={25}
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 pt-6">
        <div className="flex justify-evenly max-sm:w-[300px] md:w-[60%] items-center border rounded-md shadow-md px-2 py-1.5 bg-slate-100">
          <input
            placeholder="yourmail@example.com"
            className="sm:w-[450px] bg-slate-100"
          />
          <div className="w-20"></div>
          <button className="bg-emerald-800 text-white max-sm:text-[12px] md:text-[12px] font-semibold shadow-md p-2 rounded-md">
            Subscribe
          </button>
        </div>
        <div className="flex items-center">
          <ul className="flex justify-evenly max-sm:justify-center gap-8 max-sm:gap-3.5 w-[350px] pointer-events-auto">
            {navLinkData.map((data: NavLinkProps) => (
              <li
                key={data.link}
                className="font-poppins text-lg max-sm:text-md md:max-sm:text-md font-semibold text-slate-100"
              >
                <Link href={data.linkURL}>{data.link}</Link>
              </li>
            ))}
            <li className="font-poppins text-lg max-sm:text-md font-semibold text-slate-100">
              <Link href="#">FEEDBACK</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
