import Head from "next/head";
import Counter from "components/Counter";

const INITIAL_COUNT = 0;

export default function Home() {
  return (
    <>
      <Head>
        <title>Cookie Clicker</title>
      </Head>

      <a href="#main" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <h1 className="sr-only">Cookie Clickers</h1>

      <div className="py-20 container mx-auto min-h-screen flex flex-col justify-center items-center">
        <main id="main" className={"contents"}>
          <Counter initialCount={INITIAL_COUNT} />
        </main>
      </div>
    </>
  );
}
