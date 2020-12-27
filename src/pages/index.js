import Head from "next/head";

import axios from "src/configs/axios";
import Header from "src/parts/Header";
import About from "src/parts/About";
import Hero from "src/parts/Hero";
import ListCourses from "src/parts/ListCourses/index";
import ListCategory from "src/parts/ListCategories/index";
import Footer from "src/parts/Footer";
import courses from "src/constants/api/courses";

function Home({ data }) {
  return (
    <>
      <Head>
        <title>Sinau</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <section className="header-clipping pt-10">
          <div className="container mx-auto">
            <Header></Header>
            <Hero></Hero>
          </div>
        </section>
        <section
          className="container mx-auto pt-24"
          style={{ marginTop: "44rem" }}
        >
          <About></About>
        </section>
        <hr style={{ marginTop: "7rem" }} />
        <section className="container mx-auto" style={{ marginTop: "7rem" }}>
          <div className="container mx-auto text-center">
            <h2 className="text-4xl text-gray-900">Kelas Kami</h2>
            <p className="mt-2 mb-24 text-md text-gray-700">
              Materi kami sangat up to date dan selalu <br />
              mengikuti perkembangan teknologi
            </p>
          </div>
          <ListCourses data={data}></ListCourses>
        </section>
        <section className="container mx-auto pt-24">
          <ListCategory data={data}></ListCategory>
        </section>
        <section className="mt-24 bg-green-700 py-12">
          <Footer />
        </section>
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await courses.all();
    return { data: data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
