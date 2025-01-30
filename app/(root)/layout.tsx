import Link from "next/link";
import { NavLinkProps } from "../types";
import {
  DropdownActivityData,
  DropdownTimeData,
  navLinkData,
} from "../constants/data";
import Dropdown from "../components/ui/dropdownComponent";
import SideButtonComponent from "../components/ui/sideButtonComponent";
import Image from "next/image";
import FooterComponent from "../components/FooterComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" className="h-svh">
      <section>
        <nav className="flex justify-between border px-24 max-sm:px-8 py-4 shadow-md">
          <div className="flex items-center gap-2 ">
            <div className="dark:bg-emerald-800 rounded-full p-1">
              <Image src="/stadium.png" alt="logo" height={45} width={40} />
            </div>
            <h1 className="font-mochiyPopOne font-bold dark:text-slate-300 text-emerald-800 text-2xl px-2">
              Stadium
            </h1>
          </div>
          <div className="flex items-center max-sm:hidden">
            <ul className="flex justify-start gap-8 w-[350px] pointer-events-auto">
              {navLinkData.map((data: NavLinkProps) => (
                <li
                  key={data.link}
                  className="font-poppins text-lg text-emerald-800"
                >
                  <Link href={data.linkURL}>{data.link}</Link>
                </li>
              ))}
            </ul>
            <div>login</div>
          </div>
          <div className="items-center hidden max-sm:flex">B</div>
        </nav>
      </section>

      <section className="flex w-full h-[94%] max-md:flex-col max-md:h-full max-sm:justify-center">
        <section className="w-[16%] shadow-md flex flex-col items-center justify-between py-24 max-sm:shadow-none max-sm:w-full max-sm:py-2">
          <div className="flex flex-col max-sm:gap-2 gap-8 justify-center ">
            <Dropdown dropdowns={DropdownActivityData.dropdowns} type="event" />
            <Dropdown dropdowns={DropdownTimeData.dropdowns} />
            <SideButtonComponent title="Date" />{" "}
            <div className="hidden justify-center w-full max-sm:flex">
              <div className="flex justify-evenly border rounded-md px-2 py-1.5 bg-slate-100">
                <input
                  placeholder="search"
                  className="max-sm:w-[300px] w-[450px]  bg-slate-100"
                />
                <Image
                  src="/vercel.svg"
                  alt="Vercel logo"
                  height={25}
                  width={25}
                />
              </div>
            </div>
          </div>
          <div className="max-sm:hidden">
            <SideButtonComponent title="Sign-in" />
          </div>
        </section>
        <section className="w-[80%] pt-8 relative overflow-y-auto max-sm:w-full">
          {children}
        </section>
      </section>

      <section>
        <FooterComponent />
      </section>
    </main>
  );
}
