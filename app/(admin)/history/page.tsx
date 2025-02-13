"use client";
import React, { useEffect, useState } from "react";
import HistoryTable from "./components/HistoryTable";
import { HistoryProps } from "@/types";
import { getHistory } from "@/lib/actions/user/history.action";

function HistoryPage() {
  const [history, setHistory] = useState<HistoryProps[]>([]);

  useEffect(() => {
    const fetchALLTickets = async () => {
      // console.log("Program started");
      const res: HistoryProps[] = await getHistory();

      setHistory(res);

      console.log("Tickets Homepage:", res[0].name);
    };

    fetchALLTickets();
  }, []);
  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>History</h1>
        <h1>AdminView</h1>
      </div>
      <div className="px-4 h-[85vh]">
        <HistoryTable history={history} />
      </div>
    </section>
  );
}

export default HistoryPage;
