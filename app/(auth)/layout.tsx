import React from "react";
import NotificationPopup from "../components/ui/popupAlert";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex justify-center items-center min-h-svh">
      {/* {children} */}
      <NotificationPopup>{children}</NotificationPopup>
    </main>
  );
}
