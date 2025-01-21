import React from "react";
import Image from "next/image";
import { MyEvents } from "../constants";
import ActivityComponents from "../components/ActivityComponents";

const eventsList: MyEvents[] = [
  { title: "Johnny Depp", date: "Mon 16/02/25", price: 6000, rate: 3.5 },
  { title: "Houston Right", date: "Tues 16/02/25", price: 3000, rate: 3.5 },
  { title: "AFRIMAA", date: "Wed 16/02/25", price: 2500, rate: 3.5 },
  { title: "OSCAR AWARD", date: "Thurs 16/02/25", price: 1500, rate: 3.5 },
];
const Home = () => {
  return (
    <div>
      <div className="flex justify-center w-full max-sm:hidden">
        <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
          <input placeholder="search" className="sm:w-[450px] bg-slate-100" />
          <Image src="/vercel.svg" alt="Vercel logo" height={25} width={25} />
        </div>
      </div>

      <ActivityComponents name="Events" activity={eventsList} />
      <ActivityComponents name="Tickets" activity={eventsList} />
      <ActivityComponents name="Sport" activity={eventsList} />
    </div>
  );
};

export default Home;
