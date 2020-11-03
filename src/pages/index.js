import Head from "next/head";

import axios from "src/configs/axios";
import Header from "src/parts/Header";
import Hero from "src/parts/Hero";
import ListCourses from "src/parts/ListCourses/index";
import ListCategory from "src/parts/ListCategories/index";
import Footer from "src/parts/Footer";

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
        <section className="container mx-auto" style={{ marginTop: "47rem" }}>
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
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
};

export default Home;
