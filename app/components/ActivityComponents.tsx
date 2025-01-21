import React from "react";
import CardComponent from "./CardComponent";
import { ActivityProps, MyEvents } from "../constants";

const ActivityComponents: React.FC<ActivityProps> = ({ activity, name }) => {
  return (
    <div>
      <div className="border  border-b-emerald-800 border-transparent w-full max-sm:flex max-sm:justify-between">
        <h3 className="font-montserratAlt text-xl sm:text-2xl font-bold py-2 pl-8">
          {name}
        </h3>
        <button className="hidden max-sm:block  text-emerald-800 font-poppins px-5 py-2 rounded-md">
          See All
        </button>
      </div>
      <div className="flex justify-between  items-center px-8 py-4">
        <div className="w-full flex max-sm:flex-col max-sm:justify-center max-sm:items-center gap-5">
          {activity.map((events: MyEvents) => (
            <div key={events.title}>
              <CardComponent
                title={events.title}
                date={events.date}
                price={events.price}
                rate={events.rate}
              />
            </div>
          ))}
        </div>
        <button className="max-sm:hidden border border-emerald-800 text-emerald-800 font-poppins px-5 py-2 rounded-md">
          See All
        </button>
      </div>
    </div>
  );
};

export default ActivityComponents;
