import React from "react";

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      type="text"
      className="p-5 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
    />
  );
}
