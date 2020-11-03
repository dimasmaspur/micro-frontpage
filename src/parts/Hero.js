import React, { useState } from "react";

export default function Hero() {
  const [state, setstate] = useState(() => "");
  function submit() {
    window.open(
      `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register?email=${state}`
    );
  }
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-5xl text-white mb-5 font-semibold">
          <span className="text-teal-500">Temukan </span>
          Cara Baru untuk Tingkatkan
          <span className="text-teal-500"> Skill</span>
        </h1>
        <p className="text-white text-lg mb-8">
          Kami menyediakan banyak keahlian untuk Anda
          <br /> dapat memilih dan fokuskan
        </p>
        <form onSubmit={submit}>
          <input
            onChange={(event) => setstate(event.target.value)}
            type="text"
            className="bg-white focus:outline-none border-0 px-6 py-3 w-1/2"
            placeholder="Alamat Email Kamu"
          />
          <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Daftar
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 340, height: 400 }}
          ></div>
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="/images/img-heroimage.jpg" alt="people with laptop" />
          </div>
        </div>
      </div>
    </div>
  );
}
