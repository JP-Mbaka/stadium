import React from "react";
import ActivityComponents from "../components/ActivityComponents";
import { Ticket } from "@/types";

type Activity = {
  activity: string;
  ticketList?: Ticket[];
  eventList?: Ticket[];
  sportList?: Ticket[];
};

function FilterPage({ activity, ticketList, eventList, sportList }: Activity) {
  return activity.match("Tickets") ? (
    <>
      <ActivityComponents name="Tickets" activity={ticketList} />
    </>
  ) : activity.match("Event") ? (
    <>
      <ActivityComponents name="Events" activity={eventList} />
    </>
  ) : activity.match("Sports") ? (
    <>
      <ActivityComponents name="Sports" activity={sportList} />
    </>
  ) : (
    <>
      <ActivityComponents name="Tickets" activity={ticketList} />
      <ActivityComponents name="Events" activity={eventList} />
      <ActivityComponents name="Sports" activity={sportList} />
    </>
  );
}

export default FilterPage;
