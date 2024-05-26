import { useCounter } from "../hooks/useCounter";

type CounterProps = {
  initialCount: number;
};

export default function Counter({ initialCount = 0 }: CounterProps) {
  const { count, incrementByOne, isAutomated, toggleAutomate, reset } = useCounter(initialCount);

  return (
    <>
      <div>
        <p className="heading text-6xl font-medium text-center">{count}</p>
        <p className="text-xl text-gray-500 font-medium text-center">Cookies</p>
      </div>

      <div className="h-16" />

      <div className="flex items-center justify-center">
        <div onClick={incrementByOne}>
          <img height={200} width={200} src="/cookie.svg" alt="Add cookie" />
        </div>
      </div>

      <div className="h-16" />

      <div className="flex flex-col sm:flex-row gap-3 text-center">
        <div
          onClick={toggleAutomate}
          className="shadow-md bg-blue-500 py-4 px-6 rounded-lg text-blue-100 font-bold hover:bg-blue-600 hover:underline focus:ring-2 ring-offset-2 ring-blue-600 focus:outline-none"
        >
          Turn automate {isAutomated ? "off" : "on"}
        </div>
        <div
          onClick={reset}
          className="border shadow-md bg-white py-4 px-6 rounded-lg text-gray-700 font-bold hover:bg-gray-100 hover:underline focus:ring-2 ring-offset-2 ring-blue-600 focus:outline-none"
        >
          Reset
        </div>
      </div>
    </>
  );
}
