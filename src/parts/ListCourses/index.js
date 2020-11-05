import React from "react";
import Link from "next/link";
import RenderItem from "./RenderItem";

export default function ListCourses({ data }) {
  return (
    <>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-gray-900">Kelas Kami</h2>
        <p className="mt-2 mb-24 text-md text-gray-700">
          Materi kami sangat up to date dan selalu <br />
          mengikuti perkembangan teknologi
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Kelas Terbaru</h2>
          <h3 className="text-xl text-gray-900">
            Yuk <span className="text-teal-400">Produktif</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-sm">
              Lihat Semua Kelas
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-start items-center -mx-4 mt-6">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center-py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
