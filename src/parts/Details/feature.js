import React from "react";

export default function feature({ data }) {
  return (
    <div className="border border-gray-300 bg-white p-6" style={{ width: 290 }}>
      <div className="flex">
        <div className="w-auto">{data.icon}</div>
        <div className="ml-5">
          <span className="text-gray-600 block">{data.meta}</span>
          <span className="text-gray-900 text-3xl">{data.value}</span>
        </div>
      </div>
    </div>
  );
}
