import React from "react";
import RenderItem from "./RenderItem";
import Ic1 from "public/images/kat-1.svg";
import Ic2 from "public/images/kat-2.svg";
import Ic3 from "public/images/kat-3.svg";
import Ic4 from "public/images/kat-4.svg";
import Ic5 from "public/images/kat-5.svg";
import Ic6 from "public/images/kat-6.svg";

export default function index() {
  const data = [
    {
      imageName: <Ic1 />,
      name: "Business Development",
      total: 124,
    },
    {
      imageName: <Ic2 />,
      name: "Content Writer",
      total: 245,
    },
    {
      imageName: <Ic3 />,
      name: "Product Advertisement",
      total: 1035,
    },
    {
      imageName: <Ic4 />,
      name: "Customer Relationship",
      total: 553,
    },
    {
      imageName: <Ic5 />,
      name: "Game Development",
      total: 824,
    },
    {
      imageName: <Ic6 />,
      name: "Travel Guidance",
      total: 24,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">Kategori</h2>
          <h3 className="text-xl text-gray-900">
            Mari Kita <span className="text-teal-400">Pelajari</span>
          </h3>
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
