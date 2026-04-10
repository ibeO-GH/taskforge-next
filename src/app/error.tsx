"use client";

import React from "react";

export default function GlobalError({ error }: { error: Error }) {
  return (
    <div className="p-6 bg-red-100 text-red-800 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Something went wrong 😵</h2>
      <p>{error.message}</p>
      <button
        onClick={() => location.reload()}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Reload
      </button>
    </div>
  );
}
