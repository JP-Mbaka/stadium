import React from "react";
import Image from "next/image";



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
       
      </div>
      <div className="pb-4 px-4">
        <h2 className="font-montserratAlt font-semibold sm:text-lg">{title}</h2>
        <p className="font-poppins">{date}</p>
        <h3 className="font-montserratAlt font-semibold sm:text-xl text-emerald-800">
          $ {price}
        </h3>
        <p className="flex gap-2 py-4 items-center font-poppins font-thin">
          <Image src="/star.png" alt="rating" height={25} width={25} /> ({rate})
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
