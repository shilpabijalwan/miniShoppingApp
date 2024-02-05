import React from "react";

export default function SvgDown() {
  return (
    <svg
      className="w-5 h-5 ml-2 -mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function SvgUp() {
  return (
    <svg
      className="w-5 h-5 ml-2 -mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true">
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 8.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
