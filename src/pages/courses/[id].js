import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import courses from "src/constants/api/courses";
// import Youtube from "react-youtube";
import Header from "src/parts/Header";
import Footer from "src/parts/Footer";
import Ic1 from "public/images/ic-1.svg";
import Ic2 from "public/images/ic-2.svg";
import Ic3 from "public/images/ic-3.svg";
import Feature from "src/parts/Details/feature";
import CoursePhoto from "src/parts/Details/CoursePhoto";
import { CSSTransition } from "react-transition-group";
import RenderPreview from "src/parts/Details/RenderPreview";
import HappyStudent from "src/parts/Details/HappyStudent";
import formatThousand from "src/helpers/formatThousand";

function DetailsCourse({ data }) {
  console.log(data);

  const footer = useRef(null);
  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top - 0;

    const stickyMetaToggler = () => {
      setisSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };
    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.addEventListener("scroll", stickyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sinau</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <img className="mx-auto" src={data?.images?.[0]?.image} alt="" />
          </div>
        )}
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online</h3>
            <h4 className="text-6xl text-teal-500 font-semibold">
              {data?.name ?? "nama kelas"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header></Header>
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto ">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <Ic1 className="fill-green-400" />,
                  meta: "Pelajar",
                  value: data?.total_student ?? 0,
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <Ic2 className="fill-green-400" />,
                  meta: "Video",
                  value: data?.total_videos ?? 0,
                }}
              ></Feature>
              <Feature
                data={{
                  icon: <Ic3 className="fill-green-400" />,
                  meta: "Sertifikat",
                  value: data?.certificate === 1 ? "Tersedia" : "-",
                }}
              ></Feature>
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-50 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-2xl text-gray-900">
                      {data?.name ?? "nama kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-green-400 whitespace-no-wrap mr-4">
                    {data?.type === "free" ? (
                      "Gratis"
                    ) : (
                        <span>Rp {formatThousand(data?.price ?? 0)}</span>
                      )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-no-wrap"
                    target="_black"
                    rel="noopener noreferrer"
                  >
                    {data?.type === "free" ? "Daftar Sekarang" : "Beli Kelas"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="w-3/4 mx-auto mt-8">
          <div className="w-full">
            <section>
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Deskripsi <span className="text-green-400">Kelas</span>
                <p className="text-gray-600 text-lg leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  placeat molestiae delectus deserunt unde corrupti nulla eos in
                  minus eum, architecto quidem qui laudantium, tempore laborum
                  modi laboriosam necessitatibus blanditiis.
                  {/* {data?.description ?? "No description"} */}
                </p>
              </h6>
            </section>
            {/* <section className="mt-10">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Foto <span className="text-green-400">Kelas</span>
              </h6>
              <div className="flex justify-start items-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map?.((photo, index) => (
                    <CoursePhoto data={photo.image} key={index}></CoursePhoto>
                  ))
                ) : (
                    <div className="w-full text-center py-12">No Image Found</div>
                  )}
              </div>
            </section> */}
            <section className="mt-10">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Yang Akan <span className="text-green-400">Dipelajari</span>
              </h6>
              {data?.chapters?.length > 0 ? (
                <RenderPreview previews={data.chapters}></RenderPreview>
              ) : (
                  <div className="w-full text-center py-12">No Chapter Found</div>
                )}
            </section>
            <section className="mt-10">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Mentor <span className="text-green-400">Kami</span>
              </h6>
              <div className="flex items-center">
                <img
                  src={data?.mentor?.profile ?? ""}
                  alt={data?.mentor?.name}
                  className="w-20 h-20 rounded-full overflow-hidden object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg text-gray-900">
                    {data?.mentor?.name ?? "Mentor's name"}
                  </h2>
                  <h3 className="text-sm text-gray-60">
                    {data?.mentor?.profession}
                  </h3>
                </div>
              </div>
            </section>
            <section className="mt-24 w-full md:w-6/12">
              <p>&nbsp;</p>
              {/* <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Happy <span className="text-green-400">Students</span>
              </h6>
              {data.reviews?.map?.((testimonial, index) => {
                return (
                  <HappyStudent key={index} data={testimonial}></HappyStudent>
                );
              })} */}
            </section>
          </div>
        </div>
      </section>
      <section className="mt-24 bg-green-700 py-12" ref={footer}>
        <Footer />
      </section>
    </>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.details(id);
    return { data: data };
  } catch (error) { }
};
export default DetailsCourse;
