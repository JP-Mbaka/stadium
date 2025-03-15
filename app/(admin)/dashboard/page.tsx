"use client";
import ChartComponents from "@/app/components/chartComponents";
import Dropdown from "@/app/components/ui/dropdownComponent";
import {
  DropdownActivityData,
  DropdownDashboardStatus,
} from "@/app/constants/data";
import { ChartLabel } from "@/types";
import React from "react";

const chartData: ChartLabel[] = [
  { label: "January", value: 186 },
  { label: "February", value: 86 },
  { label: "March", value: 67 },
  { label: "April", value: 96 },
  { label: "May", value: 146 },
  { label: "June", value: 168 },
];

const chartConfig = {
  value: {
    label: "Sales",
    color: "bg-emerald-800",
  },
};

const handleClick = (option: string) => {
  console.log("Selected in Parent:", option);
};

function AdminPage() {
  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>Dashboard</h1>
        <h1>AdminView</h1>
      </div>
      <div className="relative inline-block h-full w-full">
        <div className="absolute top-4 left-24 right-24 flex justify-evenly z-20">
          <Dropdown
            dropdowns={DropdownActivityData.dropdowns}
            onSelect={handleClick}
            type="event"
          />
          <Dropdown
            dropdowns={DropdownActivityData.dropdowns}
            onSelect={handleClick}
            type="event"
          />
          <Dropdown
            dropdowns={DropdownDashboardStatus.dropdowns}
            onSelect={handleClick}
            type="event"
          />
        </div>
        <div className=" ">
          <ChartComponents chartConfig={chartConfig} chartData={chartData} />
        </div>
      </div>
    </section>
  );
}

export default AdminPage;
