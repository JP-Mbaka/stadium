"use client";
import CardComponent from "./CardComponent";
import { ActivityProps, Ticket } from "../../types";
import Link from "next/link";

const ActivityComponents: React.FC<ActivityProps> = ({ activity, name }) => {
  // const [onlyTickets, setOnlyTickets] = useState(false);
  // const [onlyEvents, setOnlyEvents] = useState(false);
  // const [onlySports, setOnlySports] = useState(false);
  // const [all, setAll] = useState(true);

  if (!activity || activity.length === 0) <div>Error</div>;
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
      <div className="flex justify-between md:justify-end flex-wrap gap-4 items-center px-8 py-4">
        <div className="w-full flex  flex-wrap max-sm:flex-col max-sm:justify-center max-sm:items-center gap-5">
          {activity?.map((events: Ticket, index) => (
            <div key={index}>
              <Link href={`/item/${events.tid}`}>
                <CardComponent
                  title={events.name}
                  date={`${events.$createdAt}`}
                  price={events.price}
                  rate={0.0} //rate
                />
              </Link>
            </div>
          ))}
        </div>
        <button className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md">
          See All
        </button>
      </div>
    </div>
  );
};

export default ActivityComponents;
