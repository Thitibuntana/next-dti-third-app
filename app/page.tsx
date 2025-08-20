import React from "react";
import money from "./images/money.png";
import Image from "next/image";
import MoneyShare from "@/components/MoneyShare";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="shadow-xl rounded-xl p-8 w=full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-blue-800">
          Money Share Calculator
        </h1>
        <h3 className="text-xl font-bold text-center text-blue-800 mt-4">
          Calculate money you want to share.
        </h3>
        <Image
          className="mx-auto mt-4"
          src={money}
          alt="Money Image"
          width={100}
          height={100}
          priority
        />
        <MoneyShare />
      </div>
      <h3 className="font-bold mt-8 text-xl">
        Developed by
        <span> THE DTI-SAU Team 500 B.C.</span>
      </h3>
    </div>
  );
}
