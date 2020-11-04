import React from "react";
import IcPreview from "public/images/btn_view.svg";
import Modal from "src/components/Modal";

export default function CoursePhoto({ data }) {
  return (
    <div className="w-1/3 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IcPreview></IcPreview>
          <img src={data} alt={data} className="object-cover h-40 w-full " />
        </figure>
        <Modal content={(toggle) => <img src={data} alt={data} />}>
          {(toggle) => <span onClick={toggle} className="link-wrapped"></span>}
        </Modal>
      </div>
    </div>
  );
}
