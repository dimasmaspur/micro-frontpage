import React from "react";
import Image from "public/images/About.svg";
// import Logo from "public/images/logo.svg";

export default function About() {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="mx-auto ">
        <h3 className="text-4xl text-center text-gray-900">
          Segera Gapai Impianmu
        </h3>
        <p className="mt-2 mb-20 text-md text-gray-700 text-center">
          Belajar di Sinau materinya terstruktur dan relevan. <br />
          Belajar berkualitas dan seru banget deh!
        </p>
        <div className="about">
          <Image />
        </div>
      </div>
    </div>
  );
}
