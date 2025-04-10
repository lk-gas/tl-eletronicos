'use client';

import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input className="border p-2 rounded-lg w-full" {...props} />
  );
}
