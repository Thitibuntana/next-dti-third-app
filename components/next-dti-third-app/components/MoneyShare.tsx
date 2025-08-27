"use client";
import { useState } from "react";

export default function MoneyShare() {
  const [amount, setAmount] = useState("");
  const [person, setPerson] = useState("");
  const [result, setResult] = useState("0.00");
  const handleReset = () => {
    setAmount("");
    setPerson("");
    setResult("0.00");
  };

  const handlecalculate = () => {
    if (amount === "" || person === "" || amount === "0" || person === "0") {
      alert("Please enter valid amount and number of people.");
      return;
    }
    const totalAmount = Number(amount);
    const totalPerson = Number(person);
    const result = (totalAmount / totalPerson).toFixed(2);
    setResult(result);
  };
  return (
    <div>
      <h3 className="font-bold text-gray-500 text-xl mt-5">Amount of Money</h3>
      <input
        type="number"
        name="amount"
        id="amount"
        min={0}
        placeholder="Insert Amount..."
        className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-blue-500 focus:ring-2 rounded [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <h3 className="font-bold text-gray-500 text-xl mt-4 ">
        Amount of People
      </h3>
      <input
        type="number"
        name="people"
        id="people"
        min={0}
        placeholder="Insert Amount..."
        className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-blue-500 focus:ring-2 rounded [&::-webkit-outer-spin-button]:appearance-none 
  [&::-webkit-inner-spin-button]:appearance-none 
  [appearance:textfield]"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <button
        className="mt-6 w-full bg-blue-600 text-white p-4 rounded hover:bg-blue-700 transition-colors"
        onClick={handlecalculate}
      >
        Calculate Share
      </button>
      <button
        className="mt-4 w-full bg-red-600 text-white p-4 rounded hover:bg-red-700 transition-colors"
        onClick={handleReset}
      >
        Reset
      </button>
      <div className="text-center mt-6">
        <h3 className="font-bold text-gray-500 text-xl mt-4">
          Money per Person:
          <span className="text-red-600 text-5xl"> {result} </span>
          Baht
        </h3>
      </div>
    </div>
  );
}
