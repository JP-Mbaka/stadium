import { DropdownProps, NavLinkProps } from "../../types";

export const navLinkData: NavLinkProps[] = [
  { link: "HOME", linkURL: "#" },
  { link: "ABOUT-US", linkURL: "#" },
  { link: "CAREER", linkURL: "#" },
];

export const socialLinkData: NavLinkProps[] = [
  {
    link: "Facebook",
    linkURL: "https://web.facebook.com",
    linkImg: "/facebook.svg",
  },
  {
    link: "Instagram",
    linkURL: "https://www.instagram.com/johnpaul_mbaka/",
    linkImg: "/instagram.svg",
  },
  { link: "Twitter", linkURL: "https://x.com/home", linkImg: "/x.svg" },
];

export const DropdownActivityData: DropdownProps = {
  dropdowns: [
    { title: "All" },
    { title: "Tickets" },
    { title: "Sports" },
    { title: "Event" },
  ],
  onSelect: function (option: string): void {
    throw new Error(`Function not implemented.:${option}`);
  },
};

export const DropdownTimeData: DropdownProps = {
  dropdowns: [
    { title: "Morning" },
    { title: "Afternoon" },
    { title: "Evening" },
    { title: "Night" },
  ],
  onSelect: function (option: string): void {
    throw new Error(`Function not implemented.:${option}`);
  },
};

export const DropdownDashboardStatus: DropdownProps = {
  dropdowns: [{ title: "expired" }, { title: "active" }, { title: "pending" }],
  onSelect: function (option: string): void {
    throw new Error(`Function not implemented.:${option}`);
  },
};
