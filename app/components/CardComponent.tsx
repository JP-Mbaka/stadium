import React from "react";
// import Image from "next/image";

// type Props = {
//     title?: string; // Optional title prop
//     items: string | string[]; // Single or multiple items
//   };

type CardProps = {
  title: string;
  date: string;
  price: number;
  rate: number;
};

const CardComponent: React.FC<CardProps> = ({ title, date, price, rate }) => {
  return (
    <div className="flex flex-col justify-center gap-4 border border-emerald-800 rounded-md w-[200px] shadow-md">
      <div className="w-full rounded-t-md bg-emerald-800 h-40">
        {/* <Image
          src="/vercel.svg"
          className="w-full bg-emerald-800"
          height={200}
          width={200}
          alt="product-label"
        /> */}
      </div>
      <div className="pb-4 px-4">
        <h2 className="font-montserratAlt font-semibold sm:text-lg">{title}</h2>
        <p className="font-poppins">{date}</p>
        <h3 className="font-montserratAlt font-semibold sm:text-xl text-emerald-800">
          $ {price}
        </h3>
        <p className="font-poppins font-thin">img ({rate})</p>
      </div>
    </div>
  );
};

export default CardComponent;
