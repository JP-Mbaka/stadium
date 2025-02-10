import React from "react";
import HistoryTable from "./components/HistoryTable";

function HistoryPage() {
  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>History</h1>
        <h1>AdminView</h1>
      </div>
      <div className="px-4 h-[85vh]">
        <HistoryTable />
      </div>
    </section>
  );
}

export default HistoryPage;
