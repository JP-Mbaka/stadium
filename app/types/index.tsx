import { z } from "zod";

export declare type MyEvents = {
  title: string;
  date: string;
  price: number;
  rate: number;
};

export declare type ActivityProps = {
  name: string;
  activity: MyEvents[];
};

export declare type NavLinkProps = {
  link: string;
  linkURL: string;
  linkImg?: string;
};

export declare type onlyMe = {
  title: string;
};
export declare type DropdownProps = {
  dropdowns: onlyMe[];
  type?: string;
};

export const AuthFormSchema = (type: string) =>
  z.object({
    email: z.string().email(), //{ message: "enter a valid email" }
    password: z.string().min(8), //{ message: "Password must be more than 8 characters" }
    confirmPassword: type === "" ? z.string().optional() : z.string().min(8),
    firstName: type === "" ? z.string().optional() : z.string().max(50),
    lastName: type === "" ? z.string().optional() : z.string().max(50),
    state: type === "" ? z.string().optional() : z.string().max(20),
    country: type === "" ? z.string().optional() : z.string().max(20),
  });

export const createFormSchema = z.object({
  name: z.string().min(2),
  price: z.string(),
  type: z.string().min(5).max(5),
  category: z.string().min(3),
  description: z.string().min(10).max(50),
});
