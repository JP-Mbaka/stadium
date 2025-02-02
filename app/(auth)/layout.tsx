import React from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="flex justify-center items-center min-h-svh">
      {children}
    </main>
  );
}
