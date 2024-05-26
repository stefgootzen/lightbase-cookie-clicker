import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import Counter from "components/Counter";

/**
 * Improve this code as much as possible and make it work.
 * You're allowed to use online resources.
 */
export default function Home() {
  const [count, setCount] = useState(0);
  const [isAutomated, setIsAutomated] = useState(false);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleAutomateOn = () => {
    setIsAutomated(true);

    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const handleAutomateOff = () => {
    if (!intervalRef.current) {
      return;
    }
    clearInterval(intervalRef.current);
    setIsAutomated(false);
  };

  const toggleAutomate = () => {
    isAutomated ? handleAutomateOff() : handleAutomateOn();
  };

  const reset = () => {
    setCount(0);
  };

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
        <div className="h-4" />

        <main id="main">
          <Counter count={count} />

          <div className="h-16" />

          <div className="flex items-center justify-center">
            <div
              onClick={e => {
                e.preventDefault();
                setCount(prevCount => prevCount + 1);
              }}
            >
              <img height={200} width={200} src="/cookie.svg" alt="Add cookie" />
            </div>
          </div>

          <div className="h-16" />

          <div className="flex items-center justify-center">
            <div
              onClick={toggleAutomate}
              className="shadow-md bg-blue-500 py-4 px-6 rounded-lg text-blue-100 font-bold hover:bg-blue-600 hover:underline focus:ring-2 ring-offset-2 ring-blue-600 focus:outline-none"
            >
              Turn automate {isAutomated ? "off" : "on"}
            </div>
            <div className="w-3" />
            <div
              onClick={reset}
              className="border shadow-md bg-white py-4 px-6 rounded-lg text-gray-700 font-bold hover:bg-gray-100 hover:underline focus:ring-2 ring-offset-2 ring-blue-600 focus:outline-none"
            >
              Reset
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
