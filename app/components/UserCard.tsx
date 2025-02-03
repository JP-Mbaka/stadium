import Link from "next/link";
import React from "react";

function UserCard() {
  return (
    <>
      <Link href={"/item/34"}>
        {/* `/item/${events.rate}` */}
        <div className="bg-slate-50 shadow-md h-60 my-4 rounded-tl-md rounded-bl-md  flex ">
          <div className="bg-yellow-300 h-full w-80 rounded-tl-md rounded-bl-md rounded-tr-md rounded-br-md"></div>
          <div className="mx-8 w-full flex flex-col justify-center ">
            <h2 className="py-4 font-semibold font-montserratAlt text-lg text-left text-emerald-800">
              Ticket Title | 𝐓𝐡𝐞 𝐄𝐧𝐝 𝐨𝐟 𝐚𝐧 𝐄𝐫𝐚, 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐒𝐭𝐚𝐫𝐭 𝐨𝐟 𝐒𝐨 𝐌𝐮𝐜𝐡 𝐌𝐨𝐫𝐞
            </h2>
            <h1 className="text-3xl text-emerald-800 font-extrabold">
              $574.00
            </h1>
            <div className="flex flex-col items-end gap-2">
              <span>EXPIRED</span>
              <div className="flex gap-4">
                <button className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md">
                  Download
                </button>
                <button className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md">
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default UserCard;
