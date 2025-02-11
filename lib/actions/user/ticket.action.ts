"use server";

import { Ticket } from "@/types";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "@/lib/util";

const {
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_TICKET_COLLECTION_ID: TICKET_COLLECTION_ID,
} = process.env;

export const editTicket = async (ticket: Ticket) => {
  console.log("Getting All Ticket Begin", ticket);
  const id = ticket.tid;
  try {
    console.log("Getting All Ticket Started:", id);
    const { database } = await createAdminClient();
    const tickets = await database.updateDocument(
      DATABASE_ID!,
      TICKET_COLLECTION_ID!,
      `${id}`,
      {
        name: ticket.name,
        type: ticket.type,
        price: ticket.price,
        status: ticket.status,
        category: ticket.category,
        description: ticket.description,
      }
    );
    console.log("ALL Tickets:", tickets);
    return parseStringify(tickets);
  } catch (error) {
    console.error("Error", error);
  }
};

export const deleteTicket = async (id: string) => {
  console.log("Delete Ticket Begin");
  try {
    console.log("Delete Ticket Started");
    const { database } = await createAdminClient();
    const response = await database.deleteDocument(
      DATABASE_ID!,
      TICKET_COLLECTION_ID!,
      id
    );
    console.log("Delete Ticket:", response);
    return parseStringify(response);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getSingleTicket = async (id: string) => {
  console.log("Getting All Ticket Begin");
  try {
    console.log("Getting All Ticket Started");
    const { database } = await createAdminClient();
    const tickets = await database.getDocument(
      DATABASE_ID!,
      TICKET_COLLECTION_ID!,
      id
      // Query.equal("$id", [id])
    );
    console.log("ALL Tickets:", tickets);
    return parseStringify(tickets);
  } catch (error) {
    console.error("Error", error);
  }
};

export const getTicket = async () => {
  try {
    const { database } = await createAdminClient();
    const tickets = await database.listDocuments(
      DATABASE_ID!,
      TICKET_COLLECTION_ID!
    );
    console.log("ALL Tickets:", tickets.documents);
    return parseStringify(tickets.documents);
  } catch (error) {
    console.error("Error", error);
  }
};

export const createTicket = async (ticket: Ticket) => {
  console.log("Creating Ticket Begin");
  try {
    console.log("Creating Ticket STARTED");
    const { account } = await createSessionClient();
    const result = await account.get();

    if (!result) return;

    const { database } = await createAdminClient();
    const newTicket = await database.createDocument(
      DATABASE_ID!,
      TICKET_COLLECTION_ID!,
      ID.unique(),
      {
        name: ticket.name,
        type: ticket.type,
        price: ticket.price,
        status: ticket.status,
        category: ticket.category,
        description: ticket.description,
      }
    );
    return parseStringify(newTicket);
  } catch (error) {
    console.error("Error", error);
  }
};
