"use client";
import { getLoggedInUser } from "@/lib/actions/user/auth.action";
import { createHistory } from "@/lib/actions/user/history.action";
import { HistoryProps, SignUpParams } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

function HistoryButton(historyProp?: HistoryProps) {
  const router = useRouter();

  async function onBuyPressed() {
    const user: SignUpParams = await getLoggedInUser();

    if (!user) router.push("/login");

    console.log("Creating History Prop check Begin:", historyProp);
    const res = await createHistory({
      eventId: `${historyProp!.eventId}`,
      userId: `${user.$id}`,
      name: `${user.firstName} ${user.lastName}`,
      ticket: historyProp!.ticket,
      price: historyProp!.price,
      status: historyProp!.status,
      type: historyProp!.type,
    });

    if (!res) return;
    router.push("/home");
  }

  return (
    <button
      onClick={onBuyPressed}
      className="max-sm:hidden border border-emerald-800 text-emerald-800 w-[100px] font-poppins px-2 py-2 rounded-md"
    >
      Buy Ticket
    </button>
  );
}

export default HistoryButton;
