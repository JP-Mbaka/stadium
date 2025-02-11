import { DropdownProps, NavLinkProps } from "../../types";

export const navLinkData: NavLinkProps[] = [
  { link: "TICKETS", linkURL: "#" },
  { link: "SPORTS", linkURL: "#" },
  { link: "EVENT", linkURL: "#" },
];

export const socialLinkData: NavLinkProps[] = [
  { link: "Facebook", linkURL: "#", linkImg: "/facebook.svg" },
  { link: "Instagram", linkURL: "#", linkImg: "/instagram.svg" },
  { link: "Twitter", linkURL: "#", linkImg: "/x.svg" },
];

export const DropdownActivityData: DropdownProps = {
  dropdowns: [{ title: "Tickets" }, { title: "Sports" }, { title: "Event" }],
};

export const DropdownTimeData: DropdownProps = {
  dropdowns: [
    { title: "Morning" },
    { title: "Afternoon" },
    { title: "Evening" },
    { title: "Night" },
  ],
};

export const DropdownDashboardStatus: DropdownProps = {
  dropdowns: [{ title: "expired" }, { title: "active" }, { title: "pending" }],
};
