import Link from "next/link";
import React from "react";

function TicketsPage() {
  return (
    <section>
      <div className="flex justify-between items-center px-6 py-8 text-4xl text-green-200 font-semibold w-full h-10 bg-emerald-800">
        <h1>Tickets</h1>
        <h1>AdminView</h1>
      </div>
      <div> Tickets Tables & Z-index dropdowns</div>
      <div className="flex justify-end px-24">
        <Link href={"/tickets/new"} className="max-sm:hidden border border-emerald-800 text-emerald-800 font-poppins px-2 py-2 rounded-md">
          Create Tickets
        </Link>
      </div>
    </section>
  );
}

export default TicketsPage;
