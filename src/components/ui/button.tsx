'use client';
import React from "react";

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600" {...props}>
      {children}
    </button>
  );
}

