export declare type MyEvents = {
  title: string;
  date: string;
  price: number;
  rate: number;
};

export declare type ActivityProps = {
  name: string;
  activity: MyEvents[];
};

export declare type NavLinkProps = {
  link: string;
  linkURL: string;
  linkImg?: string;
};

export declare type onlyMe = {
  title: string;
};
export declare type DropdownProps = {
  dropdowns: onlyMe[];
  type?: string;
};
