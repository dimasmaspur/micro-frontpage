import Head from "next/head";
import Link from "next/link";

function Random({ data }) {
  return (
    <>
      <Head>
        <title>Micro | Random</title>
      </Head>
      <main className="container mt-12">
        <h1 className="text-3xl">fetching random words</h1>
        {/* <ul>
          {data.map((todo) => {
            return (
              <li key={todo.id} className="border border-indigo-700 p-4">
                {todo?.title ?? "-"}
                <Link href={`/random/${todo.id}`}>
                  <a>Launch</a>
                </Link>
              </li>
            );
          })}
        </ul> */}
      </main>
    </>
  );
}

Random.getInitialProps = async () => {
  try {
    const data = await fetch("https://dimaspurwanto.xyz:8085/courses")
      .then((response) => response.json())
      .then((json) => json);

    return { data };
  } catch (error) {}
};
export default Random;
