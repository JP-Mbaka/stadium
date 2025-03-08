import Link from "next/link";
import { NavLinkProps } from "../../types";
import {
  // DropdownActivityData,
  // DropdownTimeData,
  navLinkData,
} from "../constants/data";
// import Dropdown from "../components/ui/dropdownComponent";
// import SideButtonComponent from "../components/ui/sideButtonComponent";
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
          <Link href={"/"}>
            <div className="flex items-center gap-2 ">
              <div className="dark:bg-emerald-800 rounded-full p-1  w-auto">
                <Image src="/stadium.png" alt="logo" height={45} width={40} />
              </div>
              <h1 className="font-mochiyPopOne font-bold dark:text-slate-300 text-emerald-800 text-2xl pt-1 px-2">
                Stadium
              </h1>
            </div>
          </Link>
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
            <div>
              <Link href={"/login"}>LOGIN</Link>
            </div>
          </div>
          <div className="items-center hidden max-sm:flex">B</div>
        </nav>
      </section>

      {children}

      <section>
        <FooterComponent />
      </section>
    </main>
  );
}
