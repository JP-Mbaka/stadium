"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Ticket } from "../../types";
import { getTicket } from "@/lib/actions/user/ticket.action";
import FilterPage from "./filterPage";
import Dropdown from "../components/ui/dropdownComponent";
import SideButtonComponent from "../components/ui/sideButtonComponent";
import { DropdownActivityData } from "../constants/data";
// ];
const Home = () => {
  const [ticketList, setTicketList] = useState<Ticket[]>();
  const [eventList, setEventList] = useState<Ticket[]>();
  const [sportList, setSportList] = useState<Ticket[]>();
  const [activityType, setActivityType] = useState<string>("");

  const handleSelection = (option: string) => {
    setActivityType(option);
    console.log("Selected in Parent:", option);
  };

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
    <section className="flex w-full h-[94%] max-md:flex-col max-md:h-full max-sm:justify-center">
      <section className="w-[16%] shadow-md flex flex-col items-center justify-between py-24 max-sm:shadow-none max-sm:w-full max-sm:py-2">
        <div className="flex flex-col max-sm:gap-2 gap-8 justify-center ">
          <Dropdown
            dropdowns={DropdownActivityData.dropdowns}
            type="event"
            onSelect={handleSelection}
          />
          {/* <Dropdown
            dropdowns={DropdownTimeData.dropdowns}
            onSelect={handleSelection}
          /> */}
          {/* <SideButtonComponent title="Date" /> */}
          <div className="hidden justify-center w-full max-sm:flex">
            <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
              <input
                placeholder="search"
                className="max-sm:w-[300px] w-[450px]  bg-slate-100"
              />
              <Image
                src="/search.png"
                alt="Search icon"
                height={25}
                width={25}
              />
            </div>
          </div>
        </div>
        <div className="max-sm:hidden">
          <SideButtonComponent title="Sign-in" />
        </div>
      </section>
      <section className="w-[80%] h-full pt-8 relative overflow-y-auto max-sm:w-full">
        {
          <div>
            <div className="flex justify-center w-full max-sm:hidden">
              <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
                <input
                  placeholder="search"
                  className="sm:w-[450px] bg-slate-100"
                />
                <Image
                  src="/search.png"
                  alt="Search icon"
                  height={25}
                  width={25}
                />
              </div>
            </div>
            <FilterPage
              activity={activityType}
              eventList={eventList}
              ticketList={ticketList}
              sportList={sportList}
            />
          </div>
        }
      </section>
    </section>
  );
};

export default Home;
