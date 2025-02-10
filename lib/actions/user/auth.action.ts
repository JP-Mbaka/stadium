"use server";

import { getUserInfoProps, signInProps, SignUpParams } from "@/types";
import { createAdminClient, createSessionClient } from "../server/appwrite";
import { ID, Query } from "node-appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "@/lib/util";

const {
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  // NEXT_PUBLIC_APPWRITE_TICKET_COLLECTION_ID: TICKET_COLLECTION_ID,
  // NEXT_PUBLIC_APPWRITE_HISTORY_COLLECTION_ID: HISTORY_COLLECTION_ID,
} = process.env;

export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error);
  }
};

export async function getLoggedInUser() {
  console.log("Executed Entry");
  try {
    console.log("Executed Started");

    const { account } = await createSessionClient();
    const result = await account.get();
    console.log("Result of Cookies:", result);

    const user = await getUserInfo({ userId: result.$id });
    console.log("Fetched User:", user);

    return parseStringify(user);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("server-write", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId });

    return parseStringify(user);
  } catch (error) {
    console.error("Error", error);
  }
};

export const Signup = async ({ password, ...userData }: SignUpParams) => {
  const { email, firstName, lastName } = userData;

  let newUserAccount;

  try {
    const { account, database } = await createAdminClient();

    newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${lastName} ${firstName}`
    );
    console.log("New account creation completed", newUserAccount);
    if (!newUserAccount) throw new Error("Error creating user");

    const newUser = await database.createDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      ID.unique(),
      {
        userId: newUserAccount.$id,
        email: newUserAccount.email,
        firstName: firstName,
        lastName: lastName,
        state: userData.state,
        country: userData.country,
      }
    );

    console.log("New user step 2 creation completed", newUser);

    const session = await account.createEmailPasswordSession(email, password);

    (await cookies()).set("server-write", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return parseStringify(newUser);
  } catch (error) {
    console.error("Error", error);
  }
};
