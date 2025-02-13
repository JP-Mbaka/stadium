"use server";

import { parseStringify } from "@/lib/util";
import { HistoryProps } from "@/types";
import { ID, Query } from "node-appwrite";
import { getLoggedInUser } from "./auth.action";
import { createAdminClient } from "../server/appwrite";

const {
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_HISTORY_COLLECTION_ID: HISTORY_COLLECTION_ID,
} = process.env;

export const getSingleHistory = async (id: string) => {
  try {
    console.log("ALL History  Started:", id);
    const { database } = await createAdminClient();
    const history = await database.listDocuments(
      DATABASE_ID!,
      HISTORY_COLLECTION_ID!,
      [Query.equal("userId", id)]
    );
    console.log("ALL History:", history.documents);
    return parseStringify(history.documents);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getHistory = async () => {
  try {
    const { database } = await createAdminClient();
    const history = await database.listDocuments(
      DATABASE_ID!,
      HISTORY_COLLECTION_ID!
    );
    console.log("ALL History:", history.documents);
    return parseStringify(history.documents);
  } catch (error) {
    console.error("Error", error);
  }
};

export const createHistory = async (row: HistoryProps) => {
  console.log("Creating History Begin:", row);
  try {
    console.log("Printed STEPPING POINT 0");

    // const { account } = await createSessionClient();

    const userRes = await getLoggedInUser();

    console.log("Printed STEPPING POINT 1");

    // const result = await account.get();

    console.log("Printed STEPPING POINT 2");

    if (!userRes) {
      console.log("Printed STEPPING POINT ERRROR HAPPEND");
      return;
    }

    console.log("Printed STEPPING POINT 3");

    const { database } = await createAdminClient();

    console.log("Printed STEPPING POINT 4");

    const newHistory = await database.createDocument(
      DATABASE_ID!,
      HISTORY_COLLECTION_ID!,
      ID.unique(),
      {
        ticket: row.ticket,
        type: row.type,
        price: row.price,
        status: row.status,
        name: row.name,
        userId: row.userId,
        eventId: row.eventId,
      }
    );

    console.log("Printed STEPPING POINT 5");

    return parseStringify(newHistory);
  } catch (error) {
    console.error("Error", error);
  }
};
