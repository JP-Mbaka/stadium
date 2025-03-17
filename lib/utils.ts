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

export function formatDate1(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  const [weekday, month, day, year] = formattedDate.replace(",", "").split(" ");

  return `${weekday} ${day} ${month} ${year}`;
}

export function formatDate2(date: Date): string {
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}
export function formatTime12Hour(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Enables 12-hour format with AM/PM
  });
}
