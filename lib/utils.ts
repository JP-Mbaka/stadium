import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function interpretError(error: Error) {
  if (error.message.includes("NetworkError")) {
    return "Network issue detected. Please check your internet connection.";
  }
  if (error.message.includes("500")) {
    return "Server error. Please try again later.";
  }
  if (error.message.includes("404")) {
    return "Requested resource not found.";
  }
  if (error.message.includes("Invalid credentials")) {
    return "Invalid credentials. Please check the email and password.";
  }
  return "An unexpected error occurred. Please try again.";
}
