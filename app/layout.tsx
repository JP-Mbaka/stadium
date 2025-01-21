import type { Metadata } from "next";
import {
  Mochiy_Pop_One,
  Montserrat_Alternates,
  Poppins,
  Shadows_Into_Light,
} from "next/font/google";
import "./globals.css";

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-mochiy-pop-one",
  subsets: ["latin"],
  weight: ["400"],
});

const montserratAlt = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const shadowsIntoLight = Shadows_Into_Light({
  variable: "--font-shadows-into-light",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Stadium",
  description:
    "Streamline stadium operations with our all-in-one Stadium Management Application. Manage ticket sales, event scheduling, facility bookings, and real-time activity tracking seamlessly. Perfect for sports, concerts, and private events. Boost efficiency and improve user experience with advanced analytics, secure payment integration, and customizable features. Explore now!",
    icons:"/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mochiyPopOne.variable} ${montserratAlt.variable}  ${poppins.variable}  ${shadowsIntoLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
