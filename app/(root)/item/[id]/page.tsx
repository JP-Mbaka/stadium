import React from "react";

async function DetailPage({ params }: { params: { id: string } }) {
  console.log("Params:", params);

  if (!(await params?.id)) {
    return <div>Error: No Item Not found</div>;
  }
  return (
    <div className="flex flex-col px-24">
      <div className="flex flex-col justify-between h-[80svh] ">
        <div className="flex flex-col">
          <div className="bg-emerald-800 h-80 w-full"></div>
          <h2 className="py-4 font-semibold font-montserratAlt text-lg text-left text-emerald-800">
            Ticket Title | 𝐓𝐡𝐞 𝐄𝐧𝐝 𝐨𝐟 𝐚𝐧 𝐄𝐫𝐚, 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐒𝐭𝐚𝐫𝐭 𝐨𝐟 𝐒𝐨 𝐌𝐮𝐜𝐡 𝐌𝐨𝐫𝐞
          </h2>
          <p className="text-justify">
            Event description:&nbsp;I’m excited to apply for the Junior Data
            Engineer role. I have experience with SQL, Python, ETL processes,
            data pipeline development, and cloud services. I’ve worked on data
            processing, transformation, and optimization to support analytics
            and ML models. Please find my CV attached for your review.
          </p>
        </div>
        <div className="flex justify-end items-center gap-8">
          <h1 className="text-3xl text-emerald-800 font-extrabold">$574.00</h1>
          <button className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md">
            Buy Ticket
          </button>
        </div>
      </div>
      {/* <div>DetailPage{await params?.id}</div> */}
    </div>
  );
}

export default DetailPage;

// export default async function Page({ params }: { params: { id: string } }) {
//   return <div>My Post: {await params.id}</div>;
// }
