import { DropdownProps, NavLinkProps } from ".";

export const navLinkData: NavLinkProps[] = [
  { link: "TICKETS", linkURL: "#" },
  { link: "SPORTS", linkURL: "#" },
  { link: "EVENT", linkURL: "#" },
];

export const socialLinkData: NavLinkProps[] = [
  { link: "Facebook", linkURL: "#" },
  { link: "Instagram", linkURL: "#" },
  { link: "Twitter", linkURL: "#" },
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
