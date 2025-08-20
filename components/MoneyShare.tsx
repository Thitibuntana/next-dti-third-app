"use client";
import React from "react";

export default function MoneyShare() {
  return (
    <div>
      <h3 className="font-bold text-gray-500 text-xl mt-5">Amount of Money</h3>
      <input
        type="number"
        name="amount"
        id="amount"
        min={0}
        placeholder="Insert Amount..."
        className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-blue-500 focus:ring-2 rounded"
      />
      <h3 className="font-bold text-gray-500 text-xl mt-4">Amount of People</h3>
      <input
        type="number"
        name="people"
        id="people"
        min={0}
        placeholder="Insert Amount..."
        className="w-full border border-gray-300 p-4 focus:outline-none focus:ring-blue-500 focus:ring-2 rounded"
      />
      <button className="mt-6 w-full bg-blue-600 text-white p-4 rounded hover:bg-blue-700 transition-colors">
        Calculate Share
      </button>
      <button className="mt-4 w-full bg-red-600 text-white p-4 rounded hover:bg-red-700 transition-colors">
        Reset
      </button>
      <div className="text-center mt-6">
        <h3 className="font-bold text-gray-500 text-xl mt-4">
          Money per Person:
          <span className="text-red-600 text-5xl"> 0 </span>
          Baht
        </h3>
      </div>
    </div>
  );
}
